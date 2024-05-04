import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../components/plasmic/daply_landing/PlasmicGlobalContextsProvider";
import { ScreenVariantProvider } from "../components/plasmic/daply_landing/PlasmicGlobalVariant__Screen";
import { PlasmicHomepage } from "../components/plasmic/daply_landing/PlasmicHomepage";
import { useRouter } from "next/router";

function Homepage() {
  // Use useRouter to get the current router information
  const router = useRouter();
  
  // Use PlasmicHomepage to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicHomepage are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicHomepage is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  return (
    <GlobalContextsProvider>
      <PageParamsProvider__
        route={router.pathname} // Use router.pathname to ensure consistency
        params={router.query}
        query={router.query}
      >
        <PlasmicHomepage />
      </PageParamsProvider__>
    </GlobalContextsProvider>
  );
}

export default Homepage;