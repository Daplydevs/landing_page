// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowRightToArcSolidsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowRightToArcSolidsvgIcon(
  props: ArrowRightToArcSolidsvgIconProps
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
        d={
          "M448 256c0-106-86-192-192-192-17.7 0-32-14.3-32-32s14.3-32 32-32c141.4 0 256 114.6 256 256S397.4 512 256 512c-17.7 0-32-14.3-32-32s14.3-32 32-32c106 0 192-86 192-192zM230.6 121.4l112 112c12.5 12.5 12.5 32.8 0 45.3l-112 112c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l57.4-57.4H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h210.7l-57.4-57.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0z"
        }
      ></path>
    </svg>
  );
}

export default ArrowRightToArcSolidsvgIcon;
/* prettier-ignore-end */
