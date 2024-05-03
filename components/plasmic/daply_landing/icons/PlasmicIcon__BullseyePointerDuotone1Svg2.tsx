// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BullseyePointerDuotone1Svg2IconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function BullseyePointerDuotone1Svg2Icon(
  props: BullseyePointerDuotone1Svg2IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 512 513"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#fV-kIDCj5X6Ya)"} fill={"#000"}>
        <path
          opacity={".4"}
          d={
            "M448 256.355c0 106-86 192-192 192-3.9 0-7.8-.1-11.7-.4l-18.4 62.6c9.9 1.2 19.9 1.8 30.1 1.8 141.4 0 256-114.6 256-256s-114.6-256-256-256-256 114.6-256 256c0 10.2.6 20.2 1.8 30.1l62.6-18.4c-.2-3.9-.4-7.8-.4-11.7 0-106 86-192 192-192s192 86 192 192zm-48 0c0-79.5-64.5-144-144-144-78.8 0-142.8 63.2-144 141.7l67.1-19.7c9.6-33.5 40.4-58 76.9-58 44.2 0 80 35.8 80 80 0 36.5-24.5 67.4-58 76.9l-19.7 67c78.5-1.1 141.7-65.1 141.7-143.9z"
          }
        ></path>

        <path
          d={
            "M243.9 248.655L39 308.855c-13.9 4.1-15.6 23.2-2.6 29.7l57.3 28.7c1.3.7 2.6 1.5 3.7 2.5l-88 88c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l88-88c1 1.1 1.9 2.3 2.5 3.7l28.7 57.3c6.5 13 25.6 11.3 29.7-2.6l60.2-204.8c3.6-12.1-7.7-23.4-19.9-19.9v-.1z"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"fV-kIDCj5X6Ya"}>
          <path
            fill={"#fff"}
            transform={"translate(0 .355)"}
            d={"M0 0h512v512H0z"}
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default BullseyePointerDuotone1Svg2Icon;
/* prettier-ignore-end */
