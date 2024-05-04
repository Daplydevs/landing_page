// pages/plasmic/[...catchall].js

import React from "react";
import { useRouter } from "next/router";
import Error from "next/error";
import { PLASMIC } from "@/plasmic-init";
import {
  PlasmicComponent,
  extractPlasmicQueryData,
  PlasmicRootProvider,
} from "@plasmicapp/loader-nextjs";
import { GetStaticProps } from "next";

export default function PlasmicLoaderPage(props) {
  const router = useRouter();
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
  const { catchall, query } = context.params ?? {};
  const plasmicPath =
    typeof catchall === "string"
      ? catchall
      : Array.isArray(catchall)
      ? `/${catchall.join("/")}`
      : "/";
  const plasmicData = await PLASMIC.maybeFetchComponentData(
    "/content" + plasmicPath
  );

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
