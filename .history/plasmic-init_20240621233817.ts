import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { ScrollProvider } from "./components/ScrollContext";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "e2Wrjg6Dz94BkfogsCYoEo",
      token: "0TYpwtSJEl8FBPGKb4nwVlQomOYpydhWzAvpc2yCia3SMJOICln9t07AQ3yKCmeo9236dCXlxaGP6zCuqABCGg",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});



PLASMIC.registerGlobalContext(ScrollProvider, {
  name: "ScrollProvider",
  providesData: true,
  props: {},
}); 