import * as React from "react";
import { PlasmicComponent, extractPlasmicQueryData, ComponentRenderData, PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import { GetStaticProps } from "next";
import Error from "next/error";
import { PLASMIC } from "@/plasmic-init";

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

export const getStaticProps: GetStaticProps = async (context) => {
  const { catchall, query } = context.params ?? {};
  const plasmicPath = typeof catchall === 'string' ? catchall : Array.isArray(catchall) ? `/${catchall.join('/')}` : '/';
  const plasmicData = await PLASMIC.maybeFetchComponentData("/content" + plasmicPath);
  if (!plasmicData) {
    // non-Plasmic catch-all
    return { props: {} };
  }
  const pageMeta = plasmicData.entryCompMetas[0];
  // Handle different types of query
  let queryCache: Record<string, any> | undefined;
  if (typeof query === 'string' || Array.isArray(query)) {
    // Convert query to Record<string, any> if it's a string or string array
    queryCache = { query: query };
  } else {
    // If query is undefined, set queryCache to undefined
    queryCache = undefined;
  }
  const extractedQueryCache = await extractPlasmicQueryData(
    <PlasmicLoaderPage
      plasmicData={plasmicData}
      queryCache={queryCache}
      query={query}
    />
  );
  return { props: { plasmicData, queryCache: extractedQueryCache }, revalidate: 60 };
};
