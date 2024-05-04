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
  const queryCache = await extractPlasmicQueryData(
    <PlasmicLoaderPage
      plasmicData={plasmicData}
      queryCache={query}
      query={query}
    />
  );
  return { props: { plasmicData, queryCache }, revalidate: 60 };
};
