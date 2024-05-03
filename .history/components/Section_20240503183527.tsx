import * as React from "react";
import {
  PlasmicSection,
  DefaultSectionProps
} from "./plasmic/daply_landing/PlasmicSection";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface SectionProps extends Omit<DefaultSectionProps, "root"> {}

function Section_(props: SectionProps, ref: HTMLElementRefOf<"div">) {
  const { className, size, background } = props; // Destructure the props
  const sectionProps = { className, size, background, root: { ref } }; // Create object with expected props
  return <PlasmicSection {...sectionProps} />; // Pass only expected props to PlasmicSection
}

const Section = React.forwardRef(Section_);
export default Section;
