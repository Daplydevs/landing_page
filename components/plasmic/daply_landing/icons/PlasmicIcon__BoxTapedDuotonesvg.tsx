// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BoxTapedDuotonesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BoxTapedDuotonesvgIcon(props: BoxTapedDuotonesvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 448 512"}
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
          "M50.7 58.5C58.9 42.3 75.5 32 93.7 32H192l-32 128H0L50.7 58.5zM288 160v96c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-96h128zm0 0L256 32h98.3c18.2 0 34.8 10.3 42.9 26.5L448 160H288z"
        }
      ></path>

      <path
        className={"fa-primary"}
        d={
          "M160 160H0v256c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V160H288v96c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-96z"
        }
      ></path>
    </svg>
  );
}

export default BoxTapedDuotonesvgIcon;
/* prettier-ignore-end */
