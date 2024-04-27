// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CalendarDayssvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CalendarDayssvgIcon(props: CalendarDayssvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 36 36"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.108 4.487V7.86m15.737-3.372V7.86M4.487 28.094V11.232A3.372 3.372 0 017.86 7.859h20.235a3.372 3.372 0 013.372 3.373v16.862m-26.979 0a3.372 3.372 0 003.372 3.372h20.235a3.372 3.372 0 003.372-3.372m-26.979 0V16.852A3.372 3.372 0 017.86 13.48h20.235a3.372 3.372 0 013.372 3.372v11.242M17.976 19.1h.012v.01h-.011v-.01zm0 3.372h.012v.011h-.011v-.01zm0 3.372h.012v.012h-.011v-.012zm-3.372-3.372h.012v.011h-.012v-.01zm0 3.372h.012v.012h-.012v-.012zm-3.372-3.372h.011v.011h-.011v-.01zm0 3.372h.011v.012h-.011v-.012zM21.349 19.1h.011v.01h-.011v-.01zm0 3.372h.011v.011h-.011v-.01zm0 3.372h.011v.012h-.011v-.012zm3.372-6.744h.012v.01h-.012v-.01zm0 3.372h.012v.011h-.012v-.01z"
        }
        stroke={"currentColor"}
        strokeWidth={"2.248"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CalendarDayssvgIcon;
/* prettier-ignore-end */
