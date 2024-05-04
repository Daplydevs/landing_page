import * as React from "react";
import { PlasmicComponent, extractPlasmicQueryData, ComponentRenderData, PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import { GetStaticProps } from "next";
import Error from "next/error";
import { PLASMIC } from "@/plasmic-init";
import { GetStaticPaths, GetStaticProps } from "next";

interface PlasmicLoaderProps {
  plasmicData?: ComponentRenderData;
  queryCache?: Record<string, any>;
  query?: any;
}

export default function PlasmicLoaderPage(props: PlasmicLoaderProps) {
  const { plasmicData, queryCache, query } = props;
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
      pageQuery={query}
    >
      <PlasmicComponent component={pageMeta.displayName} />
    </PlasmicRootProvider>
  );
}


export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const pageModules = await PLASMIC.fetchPages();
    const paths = pageModules.map((mod, index) => {
      if (mod.path === '/') {
        return { path: '/' }; // Separate object for root path
      } else {
        const catchall = mod.path.substring(1).split("/");
        catchall[catchall.length - 1] = `${catchall[catchall.length - 1]}_${index}`;
        return { params: { catchall } }; // Object with params for catch-all paths
      }
    });

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
  };
};
