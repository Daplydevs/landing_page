// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: e2Wrjg6Dz94BkfogsCYoEo
// Component: eadqT1yXoaKl

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import * as pp from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: e2Wrjg6Dz94BkfogsCYoEo/projectcss
import sty from "./PlasmicButton2.module.css"; // plasmic-import: eadqT1yXoaKl/css

import ChevronRightIcon from "./icons/PlasmicIcon__ChevronRight"; // plasmic-import: HEPvTyIN4GhK/icon

createPlasmicElementProxy;

export type PlasmicButton2__VariantMembers = {
  showStartIcon: "showStartIcon";
  showEndIcon: "showEndIcon";
  color:
    | "green"
    | "indigo"
    | "blue"
    | "red"
    | "white"
    | "darkGray"
    | "link"
    | "navLink"
    | "footerButton"
    | "navLinkBlue"
    | "smaillWhite"
    | "blueBorder"
    | "clear";
  iconOnly: "iconOnly";
  outline: "outline";
  bgDifference: "bgDifference";
  round: "round";
  large: "large";
  flat: "flat";
  extraSmallShadow: "extraSmallShadow";
  isDisabled: "isDisabled";
  small: "small";
};
export type PlasmicButton2__VariantsArgs = {
  showStartIcon?: SingleBooleanChoiceArg<"showStartIcon">;
  showEndIcon?: SingleBooleanChoiceArg<"showEndIcon">;
  color?: SingleChoiceArg<
    | "green"
    | "indigo"
    | "blue"
    | "red"
    | "white"
    | "darkGray"
    | "link"
    | "navLink"
    | "footerButton"
    | "navLinkBlue"
    | "smaillWhite"
    | "blueBorder"
    | "clear"
  >;
  iconOnly?: SingleBooleanChoiceArg<"iconOnly">;
  outline?: SingleBooleanChoiceArg<"outline">;
  bgDifference?: SingleBooleanChoiceArg<"bgDifference">;
  round?: SingleBooleanChoiceArg<"round">;
  large?: SingleBooleanChoiceArg<"large">;
  flat?: SingleBooleanChoiceArg<"flat">;
  extraSmallShadow?: SingleBooleanChoiceArg<"extraSmallShadow">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  small?: SingleBooleanChoiceArg<"small">;
};
type VariantPropType = keyof PlasmicButton2__VariantsArgs;
export const PlasmicButton2__VariantProps = new Array<VariantPropType>(
  "showStartIcon",
  "showEndIcon",
  "color",
  "iconOnly",
  "outline",
  "bgDifference",
  "round",
  "large",
  "flat",
  "extraSmallShadow",
  "isDisabled",
  "small"
);

export type PlasmicButton2__ArgsType = {
  startIcon?: React.ReactNode;
  children?: React.ReactNode;
  endIcon?: React.ReactNode;
  link?: string;
  submitsForm?: boolean;
  target?: boolean;
};
type ArgPropType = keyof PlasmicButton2__ArgsType;
export const PlasmicButton2__ArgProps = new Array<ArgPropType>(
  "startIcon",
  "children",
  "endIcon",
  "link",
  "submitsForm",
  "target"
);

export type PlasmicButton2__OverridesType = {
  root?: Flex__<"button">;
};

export interface DefaultButton2Props extends pp.BaseButtonProps {
  submitsForm?: boolean;
  target?: boolean;
  color?: SingleChoiceArg<
    | "green"
    | "indigo"
    | "blue"
    | "red"
    | "white"
    | "darkGray"
    | "link"
    | "navLink"
    | "footerButton"
    | "navLinkBlue"
    | "smaillWhite"
    | "blueBorder"
    | "clear"
  >;
  iconOnly?: SingleBooleanChoiceArg<"iconOnly">;
  outline?: SingleBooleanChoiceArg<"outline">;
  bgDifference?: SingleBooleanChoiceArg<"bgDifference">;
  round?: SingleBooleanChoiceArg<"round">;
  large?: SingleBooleanChoiceArg<"large">;
  flat?: SingleBooleanChoiceArg<"flat">;
  extraSmallShadow?: SingleBooleanChoiceArg<"extraSmallShadow">;
  small?: SingleBooleanChoiceArg<"small">;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicButton2__RenderFunc(props: {
  variants: PlasmicButton2__VariantsArgs;
  args: PlasmicButton2__ArgsType;
  overrides: PlasmicButton2__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "showStartIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showStartIcon
      },
      {
        path: "showEndIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showEndIcon
      },
      {
        path: "color",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.color
      },
      {
        path: "iconOnly",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.iconOnly
      },
      {
        path: "outline",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.outline
      },
      {
        path: "bgDifference",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.bgDifference
      },
      {
        path: "round",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.round
      },
      {
        path: "large",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.large
      },
      {
        path: "flat",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.flat
      },
      {
        path: "extraSmallShadow",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.extraSmallShadow
      },
      {
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isDisabled
      },
      {
        path: "small",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.small
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <Stack__
      as={"button"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootbgDifference]: hasVariant(
            $state,
            "bgDifference",
            "bgDifference"
          ),
          [sty.rootcolor_blueBorder]: hasVariant($state, "color", "blueBorder"),
          [sty.rootcolor_blue]: hasVariant($state, "color", "blue"),
          [sty.rootcolor_clear]: hasVariant($state, "color", "clear"),
          [sty.rootcolor_darkGray]: hasVariant($state, "color", "darkGray"),
          [sty.rootcolor_footerButton]: hasVariant(
            $state,
            "color",
            "footerButton"
          ),
          [sty.rootcolor_green]: hasVariant($state, "color", "green"),
          [sty.rootcolor_indigo]: hasVariant($state, "color", "indigo"),
          [sty.rootcolor_navLinkBlue]: hasVariant(
            $state,
            "color",
            "navLinkBlue"
          ),
          [sty.rootcolor_navLink]: hasVariant($state, "color", "navLink"),
          [sty.rootcolor_red]: hasVariant($state, "color", "red"),
          [sty.rootcolor_smaillWhite]: hasVariant(
            $state,
            "color",
            "smaillWhite"
          ),
          [sty.rootcolor_white]: hasVariant($state, "color", "white"),
          [sty.rootextraSmallShadow]: hasVariant(
            $state,
            "extraSmallShadow",
            "extraSmallShadow"
          ),
          [sty.rootflat]: hasVariant($state, "flat", "flat"),
          [sty.rooticonOnly]: hasVariant($state, "iconOnly", "iconOnly"),
          [sty.rootisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.rootlarge]: hasVariant($state, "large", "large"),
          [sty.rootoutline]: hasVariant($state, "outline", "outline"),
          [sty.rootround]: hasVariant($state, "round", "round"),
          [sty.rootshowEndIcon]: hasVariant(
            $state,
            "showEndIcon",
            "showEndIcon"
          ),
          [sty.rootshowStartIcon]: hasVariant(
            $state,
            "showStartIcon",
            "showStartIcon"
          ),
          [sty.rootsmall]: hasVariant($state, "small", "small")
        }
      )}
    >
      {(
        hasVariant($state, "iconOnly", "iconOnly")
          ? true
          : hasVariant($state, "color", "blue")
          ? false
          : hasVariant($state, "showStartIcon", "showStartIcon")
          ? true
          : false
      )
        ? renderPlasmicSlot({
            defaultContents: (
              <svg
                className={classNames(projectcss.all, sty.svg__rgifo)}
                role={"img"}
              />
            ),

            value: args.startIcon,
            className: classNames(sty.slotTargetStartIcon, {
              [sty.slotTargetStartIconcolor_blue]: hasVariant(
                $state,
                "color",
                "blue"
              ),
              [sty.slotTargetStartIconcolor_darkGray]: hasVariant(
                $state,
                "color",
                "darkGray"
              ),
              [sty.slotTargetStartIconcolor_green]: hasVariant(
                $state,
                "color",
                "green"
              ),
              [sty.slotTargetStartIconcolor_indigo]: hasVariant(
                $state,
                "color",
                "indigo"
              ),
              [sty.slotTargetStartIconcolor_link]: hasVariant(
                $state,
                "color",
                "link"
              ),
              [sty.slotTargetStartIconcolor_navLink]: hasVariant(
                $state,
                "color",
                "navLink"
              ),
              [sty.slotTargetStartIconcolor_red]: hasVariant(
                $state,
                "color",
                "red"
              ),
              [sty.slotTargetStartIconcolor_white]: hasVariant(
                $state,
                "color",
                "white"
              ),
              [sty.slotTargetStartIconiconOnly]: hasVariant(
                $state,
                "iconOnly",
                "iconOnly"
              ),
              [sty.slotTargetStartIconisDisabled]: hasVariant(
                $state,
                "isDisabled",
                "isDisabled"
              ),
              [sty.slotTargetStartIconshowEndIcon_color_green]:
                hasVariant($state, "showEndIcon", "showEndIcon") &&
                hasVariant($state, "color", "green"),
              [sty.slotTargetStartIconshowStartIcon]: hasVariant(
                $state,
                "showStartIcon",
                "showStartIcon"
              ),
              [sty.slotTargetStartIconshowStartIcon_showEndIcon_color_green]:
                hasVariant($state, "showStartIcon", "showStartIcon") &&
                hasVariant($state, "showEndIcon", "showEndIcon") &&
                hasVariant($state, "color", "green")
            })
          })
        : null}
      {(hasVariant($state, "iconOnly", "iconOnly") ? false : true)
        ? renderPlasmicSlot({
            defaultContents: "Label",
            value: args.children,
            className: classNames(sty.slotTargetChildren, {
              [sty.slotTargetChildrenbgDifference]: hasVariant(
                $state,
                "bgDifference",
                "bgDifference"
              ),
              [sty.slotTargetChildrencolor_blueBorder]: hasVariant(
                $state,
                "color",
                "blueBorder"
              ),
              [sty.slotTargetChildrencolor_blue]: hasVariant(
                $state,
                "color",
                "blue"
              ),
              [sty.slotTargetChildrencolor_clear]: hasVariant(
                $state,
                "color",
                "clear"
              ),
              [sty.slotTargetChildrencolor_darkGray]: hasVariant(
                $state,
                "color",
                "darkGray"
              ),
              [sty.slotTargetChildrencolor_footerButton]: hasVariant(
                $state,
                "color",
                "footerButton"
              ),
              [sty.slotTargetChildrencolor_green]: hasVariant(
                $state,
                "color",
                "green"
              ),
              [sty.slotTargetChildrencolor_indigo]: hasVariant(
                $state,
                "color",
                "indigo"
              ),
              [sty.slotTargetChildrencolor_link]: hasVariant(
                $state,
                "color",
                "link"
              ),
              [sty.slotTargetChildrencolor_navLinkBlue]: hasVariant(
                $state,
                "color",
                "navLinkBlue"
              ),
              [sty.slotTargetChildrencolor_navLink]: hasVariant(
                $state,
                "color",
                "navLink"
              ),
              [sty.slotTargetChildrencolor_red]: hasVariant(
                $state,
                "color",
                "red"
              ),
              [sty.slotTargetChildrencolor_smaillWhite]: hasVariant(
                $state,
                "color",
                "smaillWhite"
              ),
              [sty.slotTargetChildrencolor_white]: hasVariant(
                $state,
                "color",
                "white"
              ),
              [sty.slotTargetChildreniconOnly]: hasVariant(
                $state,
                "iconOnly",
                "iconOnly"
              ),
              [sty.slotTargetChildrenisDisabled]: hasVariant(
                $state,
                "isDisabled",
                "isDisabled"
              ),
              [sty.slotTargetChildrenlarge]: hasVariant(
                $state,
                "large",
                "large"
              ),
              [sty.slotTargetChildrenoutline]: hasVariant(
                $state,
                "outline",
                "outline"
              ),
              [sty.slotTargetChildrenshowEndIcon]: hasVariant(
                $state,
                "showEndIcon",
                "showEndIcon"
              ),
              [sty.slotTargetChildrenshowStartIcon]: hasVariant(
                $state,
                "showStartIcon",
                "showStartIcon"
              ),
              [sty.slotTargetChildrensmall]: hasVariant(
                $state,
                "small",
                "small"
              )
            })
          })
        : null}
      {(
        hasVariant($state, "iconOnly", "iconOnly")
          ? false
          : hasVariant($state, "showEndIcon", "showEndIcon")
          ? true
          : hasVariant($state, "showStartIcon", "showStartIcon")
          ? false
          : false
      )
        ? renderPlasmicSlot({
            defaultContents: (
              <ChevronRightIcon
                className={classNames(projectcss.all, sty.svg__tIm33)}
                role={"img"}
              />
            ),

            value: args.endIcon,
            className: classNames(sty.slotTargetEndIcon, {
              [sty.slotTargetEndIconcolor_blue]: hasVariant(
                $state,
                "color",
                "blue"
              ),
              [sty.slotTargetEndIconcolor_darkGray]: hasVariant(
                $state,
                "color",
                "darkGray"
              ),
              [sty.slotTargetEndIconcolor_green]: hasVariant(
                $state,
                "color",
                "green"
              ),
              [sty.slotTargetEndIconcolor_indigo]: hasVariant(
                $state,
                "color",
                "indigo"
              ),
              [sty.slotTargetEndIconcolor_link]: hasVariant(
                $state,
                "color",
                "link"
              ),
              [sty.slotTargetEndIconcolor_navLink]: hasVariant(
                $state,
                "color",
                "navLink"
              ),
              [sty.slotTargetEndIconcolor_red]: hasVariant(
                $state,
                "color",
                "red"
              ),
              [sty.slotTargetEndIconcolor_white]: hasVariant(
                $state,
                "color",
                "white"
              ),
              [sty.slotTargetEndIconiconOnly]: hasVariant(
                $state,
                "iconOnly",
                "iconOnly"
              ),
              [sty.slotTargetEndIconisDisabled]: hasVariant(
                $state,
                "isDisabled",
                "isDisabled"
              ),
              [sty.slotTargetEndIconshowEndIcon]: hasVariant(
                $state,
                "showEndIcon",
                "showEndIcon"
              ),
              [sty.slotTargetEndIconshowStartIcon]: hasVariant(
                $state,
                "showStartIcon",
                "showStartIcon"
              )
            })
          })
        : null}
    </Stack__>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.PlumeButtonProps>(
  props: P,
  ref: pp.ButtonRef
) {
  const b = pp.useButton<P, typeof PlasmicButton2>(
    PlasmicButton2,
    props,
    {
      showStartIconVariant: {
        group: "showStartIcon",
        variant: "showStartIcon"
      },
      showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      contentSlot: "children",
      startIconSlot: "startIcon",
      endIconSlot: "endIcon",
      root: "root"
    },
    ref
  );
  if (b.plasmicProps.overrides.root.as === "a") {
    b.plasmicProps.overrides.root.as = PlasmicLink__;
    b.plasmicProps.overrides.root.props.component = Link;
    b.plasmicProps.overrides.root.props.platform = "nextjs";
  }
  return b;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "button";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicButton2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicButton2__VariantsArgs;
    args?: PlasmicButton2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicButton2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicButton2__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicButton2__ArgProps,
          internalVariantPropNames: PlasmicButton2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicButton2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton2";
  } else {
    func.displayName = `PlasmicButton2.${nodeName}`;
  }
  return func;
}

export const PlasmicButton2 = Object.assign(
  // Top-level PlasmicButton2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicButton2
    internalVariantProps: PlasmicButton2__VariantProps,
    internalArgProps: PlasmicButton2__ArgProps,

    useBehavior
  }
);

export default PlasmicButton2;
/* prettier-ignore-end */
