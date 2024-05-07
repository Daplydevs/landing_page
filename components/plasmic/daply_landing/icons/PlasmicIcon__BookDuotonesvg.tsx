// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BookDuotonesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BookDuotonesvgIcon(props: BookDuotonesvgIconProps) {
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
        d={"M64 416c0-17.7 14.3-32 32-32h320v64H96c-17.7 0-32-14.3-32-32z"}
      ></path>

      <path
        className={"fa-primary"}
        d={
          "M0 96C0 43 43 0 96 0h320c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h320c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-53 0-96-43-96-96V96zm144 32c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16H144zm-16 80c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16H144c-8.8 0-16 7.2-16 16z"
        }
      ></path>
    </svg>
  );
}

export default BookDuotonesvgIcon;
/* prettier-ignore-end */
