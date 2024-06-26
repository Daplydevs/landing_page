// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicBlogCardRightLarge,
  DefaultBlogCardRightLargeProps
} from "./plasmic/daply_landing/PlasmicBlogCardRightLarge";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface BlogCardRightLargeProps extends Omit<DefaultBlogCardRightLargeProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultBlogCardRightLargeProps altogether and have
// total control over the props for your component.
export interface BlogCardRightLargeProps
  extends DefaultBlogCardRightLargeProps {}

function BlogCardRightLarge_(
  props: BlogCardRightLargeProps,
  ref: HTMLElementRefOf<"div">
) {
  // Use PlasmicBlogCardRightLarge to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicBlogCardRightLarge are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all BlogCardRightLargeProps here, but feel free
  // to do whatever works for you.

  return <PlasmicBlogCardRightLarge root={{ ref }} {...props} />;
}

const BlogCardRightLarge = React.forwardRef(BlogCardRightLarge_);
export default BlogCardRightLarge;
