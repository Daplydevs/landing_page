import * as React from "react";
import {
  PlasmicComponent,
  extractPlasmicQueryData,
  ComponentRenderData,
  PlasmicRootProvider,
} from "@plasmicapp/loader-nextjs";
import type { GetStaticPaths, GetStaticProps } from "next";
import Error from "next/error";
import { useRouter } from "next/router"; // Import useRouter hook

// Assuming PLASMIC is an environment variable set in Vercel
import { PLASMIC } from "@/plasmic-init"; // Replace with your actual import path

export default function PlasmicLoaderPage(props: {
  plasmicData?: ComponentRenderData;
  queryCache?: Record<string, any>;
}) {
  const router = useRouter(); // Access router using the hook (placed inside component)
  const { plasmicData, queryCache } = props;
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

export const getStaticProps: GetStaticProps = async (context) => {
  const { catchall } = context.params ?? {};
  const plasmicPath = typeof catchall === 'string' ? catchall : Array.isArray(catchall) ? `/${catchall.join('/')}` : '/';
  const plasmicData = await PLASMIC.maybeFetchComponentData("/content" + plasmicPath);
  if (!plasmicData) {
    // non-Plasmic catch-all
    return { props: {} };
  }
  const pageMeta = plasmicData.entryCompMetas[0];
  // Cache the necessary data fetched for the page
  const queryCache = await extractPlasmicQueryData(
    <PlasmicRootProvider
      loader={PLASMIC}
      prefetchedData={plasmicData}
      pageRoute={pageMeta.path}
      pageParams={pageMeta.params}
      pageQuery={router.query} // Pass router.query here (won't be used)
    >
      <PlasmicComponent component={pageMeta.displayName} />
    </PlasmicRootProvider>
  );
  // Use revalidate if you want incremental static regeneration
  return { props: { plasmicData, queryCache }, revalidate: 60 };
};

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
  }
};
