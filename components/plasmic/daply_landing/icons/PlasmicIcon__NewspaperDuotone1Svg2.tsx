// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NewspaperDuotone1Svg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NewspaperDuotone1Svg2Icon(
  props: NewspaperDuotone1Svg2IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 512 512"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        className={"fa-secondary"}
        opacity={".4"}
        d={
          "M96 96c0-35.3 28.7-64 64-64h288c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H48c26.5 0 48-21.5 48-48V96zm64 24v80c0 13.3 10.7 24 24 24h112c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16zm-208 96c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"
        }
      ></path>

      <path
        className={"fa-primary"}
        d={
          "M0 160v272c0 26.5 21.5 48 48 48s48-21.5 48-48V96H64c-35.3 0-64 28.7-64 64zm384-64c-8.8 0-16 7.2-16 16s7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48zm0 96c-8.8 0-16 7.2-16 16s7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48zm-208 96c-8.8 0-16 7.2-16 16s7.2 16 16 16h256c8.8 0 16-7.2 16-16s-7.2-16-16-16H176zm0 96c-8.8 0-16 7.2-16 16s7.2 16 16 16h256c8.8 0 16-7.2 16-16s-7.2-16-16-16H176z"
        }
      ></path>
    </svg>
  );
}

export default NewspaperDuotone1Svg2Icon;
/* prettier-ignore-end */
