// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AtomDuotone1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AtomDuotone1SvgIcon(props: AtomDuotone1SvgIconProps) {
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
          "M290.9 412.3c-16.7 33.8-31 35.7-34.9 35.7-3.9 0-18.1-1.9-34.9-35.7 11.4-3.9 23.1-8.4 34.9-13.5 11.8 5.1 23.4 9.7 34.9 13.5zM469.6 384c20.7-37.1 9.4-82.8-23.6-128 33-45.2 44.3-90.9 23.6-128-20.2-36.3-62.5-49.3-115.2-43.2C332.4 32.7 298.8 0 256 0c-42.8 0-76.4 32.7-98.4 84.8-52.7-6.1-95 6.8-115.2 43.2C21.7 165.1 33 210.8 66 256c-33 45.2-44.3 90.9-23.6 128 20.2 36.3 62.5 49.3 115.2 43.2 22 52.1 55.7 84.8 98.4 84.8s76.4-32.7 98.4-84.8c52.7 6.1 95-6.8 115.2-43.2zm-67.8-79.2c18.9 30.2 14.2 44 11.9 48.1-1.6 2.9-8.4 13-40.2 11.7 2.8-13.1 5-26.9 6.7-41.2 7.6-6.1 14.8-12.3 21.6-18.6zm11.9-145.7c2.3 4.2 7 17.9-11.9 48.1-6.8-6.3-14-12.5-21.6-18.6-1.7-14.3-3.9-28-6.7-41.2 31.8-1.4 38.6 8.7 40.2 11.7zM256 64c3.9 0 18.1 1.9 34.9 35.7-11.4 3.9-23.1 8.4-34.9 13.5-11.8-5.1-23.4-9.7-34.9-13.5C237.9 65.9 252.1 64 256 64zm-117.5 83.5c-2.8 13.1-5 26.9-6.7 41.2-7.6 6.1-14.8 12.3-21.6 18.6-18.8-30.3-14.2-44-11.9-48.2 1.6-2.9 8.4-13 40.2-11.7v.1zM98.3 352.9c-2.3-4.2-7-17.9 11.9-48.1 6.8 6.3 14 12.5 21.6 18.6 1.7 14.2 3.9 28 6.7 41.2-31.8 1.4-38.6-8.7-40.2-11.7zM256 176a80.001 80.001 0 11-.001 160.002A80.001 80.001 0 01256 176z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M224 256a31.996 31.996 0 019.373-22.627 31.996 31.996 0 0145.254 0 31.996 31.996 0 010 45.254 31.996 31.996 0 01-45.254 0A31.996 31.996 0 01224 256z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AtomDuotone1SvgIcon;
/* prettier-ignore-end */
