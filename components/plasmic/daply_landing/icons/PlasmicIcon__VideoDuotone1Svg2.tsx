// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VideoDuotone1Svg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VideoDuotone1Svg2Icon(props: VideoDuotone1Svg2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 576 512"}
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
          "M0 128c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
        }
      ></path>

      <path
        className={"fa-primary"}
        d={
          "M576 128c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.9 1.6L384 196.2v119.6l142.2 94.8c9.8 6.5 22.4 7.2 32.9 1.6S576 395.8 576 384V128z"
        }
      ></path>
    </svg>
  );
}

export default VideoDuotone1Svg2Icon;
/* prettier-ignore-end */
