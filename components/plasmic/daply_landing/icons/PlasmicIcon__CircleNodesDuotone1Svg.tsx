// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleNodesDuotone1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleNodesDuotone1SvgIcon(
  props: CircleNodesDuotone1SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 512 512"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".4"}
        d={
          "M418.4 157.9c-5.9 1.4-12 2.1-18.4 2.1-16.5 0-31.9-5-44.6-13.6l-37.8 207.7c5.9-1.4 12-2.1 18.4-2.1 16.5 0 31.9 5 44.6 13.6l37.8-207.7zM114.1 280.4l145.6 127.4c6.8-21.3 22.2-38.7 42.1-48.2L156.3 232.2c-6.8 21.3-22.2 38.7-42.1 48.2h-.1zm45.9-69.9L343.8 137c-14.7-14.6-23.8-34.7-23.8-57v-2.5l-183.8 73.6c14.7 14.5 23.8 34.6 23.8 56.9v2.5z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M320 80a80.003 80.003 0 0180-80 80.002 80.002 0 0156.569 136.569 80.005 80.005 0 01-113.138 0A80.005 80.005 0 01320 80zm-64 352a80.005 80.005 0 0123.431-56.569 80.005 80.005 0 01113.138 0 80.005 80.005 0 010 113.138 80.005 80.005 0 01-113.138 0A80.005 80.005 0 01256 432zM80 128a80.005 80.005 0 0156.569 23.431 80.005 80.005 0 010 113.138 80.005 80.005 0 01-113.137 0A80.002 80.002 0 0180 128z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleNodesDuotone1SvgIcon;
/* prettier-ignore-end */
