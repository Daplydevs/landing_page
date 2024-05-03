// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BoltDuotone1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BoltDuotone1SvgIcon(props: BoltDuotone1SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 448 512"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#BWGGX9tnXU9sa)"}>
        <path
          opacity={".4"}
          d={
            "M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3 4.7 12.4 16.7 20.8 30 20.8h111.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3-4.7-12.4-16.6-20.7-30-20.7H272.5l76.9-179.5z"
          }
          fill={"#4162FF"}
        ></path>
      </g>

      <defs>
        <clipPath id={"BWGGX9tnXU9sa"}>
          <path fill={"#fff"} d={"M0 0h448v512H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default BoltDuotone1SvgIcon;
/* prettier-ignore-end */
