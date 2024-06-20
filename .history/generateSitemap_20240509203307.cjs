import * as React from "react";
import {
  PlasmicComponent,
  extractPlasmicQueryData,
  ComponentRenderData,
  PlasmicRootProvider,
} from "@plasmicapp/loader-nextjs";
import type { GetStaticPaths, GetStaticProps } from "next";
import Error from "next/error";
import { useRouter } from "next/router";
import { PLASMIC } from "@/plasmic-init";


export default function PlasmicLoaderPage(props: {
  plasmicData?: ComponentRenderData;
  queryCache?: Record<string, any>;
}) {
  const { plasmicData, queryCache } = props;
  const router = useRouter();
  if (!plasmicData || plasmicData.entryCompMetas.length === 0) {
    return <Error statusCode={404} />;
  }
  const pageMeta = plasmicData.entryCompMetas[0];
  return (
    <PlasmicRootProvider
      loader={PLASMIC}
      prefetchedData={plasmicData}
      prefetchedQueryData={queryCache}
      pageRoute={pageMeta.path}
      pageParams={pageMeta.params}
      pageQuery={router.query}
    >
      <PlasmicComponent component={pageMeta.displayName} />
    </PlasmicRootProvider>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const pageModules = await PLASMIC.fetchPages();
    const uniquePaths = new Set();

    // Map the paths and filter out duplicates
    const paths = pageModules.reduce<{ params: { catchall: string[] } }[]>((acc, mod) => {
      const catchall = mod.path.substring(1).split("/");
      const pathString = catchall.join("/");
      if (!uniquePaths.has(pathString)) {
        uniquePaths.add(pathString);
        acc.push({ params: { catchall } });
      }
      return acc;
    }, []);

    return {
      paths,
      fallback: "blocking",
    };
  } catch (error) {
    console.error("Error fetching Plasmic pages:", error);
    return {
      paths: [],
      fallback: "blocking",
    };
  }
};
