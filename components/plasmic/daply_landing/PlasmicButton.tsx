// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: e2Wrjg6Dz94BkfogsCYoEo
// Component: dBCQUhJCSZs2

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
import sty from "./PlasmicButton.module.css"; // plasmic-import: dBCQUhJCSZs2/css

import AppleIcon from "./icons/PlasmicIcon__Apple"; // plasmic-import: 563f33iyx-K3/icon

createPlasmicElementProxy;

export type PlasmicButton__VariantMembers = {
  showStartIcon: "showStartIcon";
  showEndIcon: "showEndIcon";
  color2:
    | "green"
    | "indigo"
    | "blue"
    | "red"
    | "white"
    | "darkGray"
    | "link"
    | "navLink"
    | "whiteClear";
  iconOnly: "iconOnly";
  outline: "outline";
  bgDifference: "bgDifference";
  round: "round";
  large: "large";
  flat: "flat";
  extraSmallShadow: "extraSmallShadow";
  isDisabled: "isDisabled";
  underline: "underline";
};
export type PlasmicButton__VariantsArgs = {
  showStartIcon?: SingleBooleanChoiceArg<"showStartIcon">;
  showEndIcon?: SingleBooleanChoiceArg<"showEndIcon">;
  color2?: SingleChoiceArg<
    | "green"
    | "indigo"
    | "blue"
    | "red"
    | "white"
    | "darkGray"
    | "link"
    | "navLink"
    | "whiteClear"
  >;
  iconOnly?: SingleBooleanChoiceArg<"iconOnly">;
  outline?: SingleBooleanChoiceArg<"outline">;
  bgDifference?: SingleBooleanChoiceArg<"bgDifference">;
  round?: SingleBooleanChoiceArg<"round">;
  large?: SingleBooleanChoiceArg<"large">;
  flat?: SingleBooleanChoiceArg<"flat">;
  extraSmallShadow?: SingleBooleanChoiceArg<"extraSmallShadow">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  underline?: SingleBooleanChoiceArg<"underline">;
};
type VariantPropType = keyof PlasmicButton__VariantsArgs;
export const PlasmicButton__VariantProps = new Array<VariantPropType>(
  "showStartIcon",
  "showEndIcon",
  "color2",
  "iconOnly",
  "outline",
  "bgDifference",
  "round",
  "large",
  "flat",
  "extraSmallShadow",
  "isDisabled",
  "underline"
);

export type PlasmicButton__ArgsType = {
  startIcon?: React.ReactNode;
  children?: React.ReactNode;
  endIcon?: React.ReactNode;
  link?: string;
  submitsForm?: boolean;
  target?: boolean;
};
type ArgPropType = keyof PlasmicButton__ArgsType;
export const PlasmicButton__ArgProps = new Array<ArgPropType>(
  "startIcon",
  "children",
  "endIcon",
  "link",
  "submitsForm",
  "target"
);

export type PlasmicButton__OverridesType = {
  root?: Flex__<"button">;
};

export interface DefaultButtonProps extends pp.BaseButtonProps {
  submitsForm?: boolean;
  target?: boolean;
  color2?: SingleChoiceArg<
    | "green"
    | "indigo"
    | "blue"
    | "red"
    | "white"
    | "darkGray"
    | "link"
    | "navLink"
    | "whiteClear"
  >;
  iconOnly?: SingleBooleanChoiceArg<"iconOnly">;
  outline?: SingleBooleanChoiceArg<"outline">;
  bgDifference?: SingleBooleanChoiceArg<"bgDifference">;
  round?: SingleBooleanChoiceArg<"round">;
  large?: SingleBooleanChoiceArg<"large">;
  flat?: SingleBooleanChoiceArg<"flat">;
  extraSmallShadow?: SingleBooleanChoiceArg<"extraSmallShadow">;
  underline?: SingleBooleanChoiceArg<"underline">;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicButton__RenderFunc(props: {
  variants: PlasmicButton__VariantsArgs;
  args: PlasmicButton__ArgsType;
  overrides: PlasmicButton__OverridesType;
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

  const currentUser = useCurrentUser?.() || {};

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
        path: "color2",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.color2
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
        path: "underline",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.underline
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
          [sty.rootcolor2_blue]: hasVariant($state, "color2", "blue"),
          [sty.rootcolor2_darkGray]: hasVariant($state, "color2", "darkGray"),
          [sty.rootcolor2_green]: hasVariant($state, "color2", "green"),
          [sty.rootcolor2_indigo]: hasVariant($state, "color2", "indigo"),
          [sty.rootcolor2_navLink]: hasVariant($state, "color2", "navLink"),
          [sty.rootcolor2_red]: hasVariant($state, "color2", "red"),
          [sty.rootcolor2_white]: hasVariant($state, "color2", "white"),
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
          [sty.rootunderline]: hasVariant($state, "underline", "underline")
        }
      )}
    >
      {(
        hasVariant($state, "iconOnly", "iconOnly")
          ? true
          : hasVariant($state, "showStartIcon", "showStartIcon")
          ? true
          : false
      )
        ? renderPlasmicSlot({
            defaultContents: (
              <AppleIcon
                className={classNames(projectcss.all, sty.svg___4OZg)}
                role={"img"}
              />
            ),

            value: args.startIcon,
            className: classNames(sty.slotTargetStartIcon, {
              [sty.slotTargetStartIconcolor2_blue]: hasVariant(
                $state,
                "color2",
                "blue"
              ),
              [sty.slotTargetStartIconcolor2_darkGray]: hasVariant(
                $state,
                "color2",
                "darkGray"
              ),
              [sty.slotTargetStartIconcolor2_green]: hasVariant(
                $state,
                "color2",
                "green"
              ),
              [sty.slotTargetStartIconcolor2_indigo]: hasVariant(
                $state,
                "color2",
                "indigo"
              ),
              [sty.slotTargetStartIconcolor2_link]: hasVariant(
                $state,
                "color2",
                "link"
              ),
              [sty.slotTargetStartIconcolor2_navLink]: hasVariant(
                $state,
                "color2",
                "navLink"
              ),
              [sty.slotTargetStartIconcolor2_red]: hasVariant(
                $state,
                "color2",
                "red"
              ),
              [sty.slotTargetStartIconcolor2_white]: hasVariant(
                $state,
                "color2",
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
              [sty.slotTargetStartIconshowEndIcon_color2_green]:
                hasVariant($state, "showEndIcon", "showEndIcon") &&
                hasVariant($state, "color2", "green"),
              [sty.slotTargetStartIconshowEndIcon_color2_green_showStartIcon]:
                hasVariant($state, "showStartIcon", "showStartIcon") &&
                hasVariant($state, "showEndIcon", "showEndIcon") &&
                hasVariant($state, "color2", "green"),
              [sty.slotTargetStartIconshowStartIcon]: hasVariant(
                $state,
                "showStartIcon",
                "showStartIcon"
              )
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
              [sty.slotTargetChildrencolor2_blue]: hasVariant(
                $state,
                "color2",
                "blue"
              ),
              [sty.slotTargetChildrencolor2_darkGray]: hasVariant(
                $state,
                "color2",
                "darkGray"
              ),
              [sty.slotTargetChildrencolor2_green]: hasVariant(
                $state,
                "color2",
                "green"
              ),
              [sty.slotTargetChildrencolor2_indigo]: hasVariant(
                $state,
                "color2",
                "indigo"
              ),
              [sty.slotTargetChildrencolor2_link]: hasVariant(
                $state,
                "color2",
                "link"
              ),
              [sty.slotTargetChildrencolor2_navLink]: hasVariant(
                $state,
                "color2",
                "navLink"
              ),
              [sty.slotTargetChildrencolor2_red]: hasVariant(
                $state,
                "color2",
                "red"
              ),
              [sty.slotTargetChildrencolor2_whiteClear]: hasVariant(
                $state,
                "color2",
                "whiteClear"
              ),
              [sty.slotTargetChildrencolor2_white]: hasVariant(
                $state,
                "color2",
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
              [sty.slotTargetChildrenunderline]: hasVariant(
                $state,
                "underline",
                "underline"
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
              <AppleIcon
                className={classNames(projectcss.all, sty.svg___0AYaX)}
                role={"img"}
              />
            ),

            value: args.endIcon,
            className: classNames(sty.slotTargetEndIcon, {
              [sty.slotTargetEndIconcolor2_blue]: hasVariant(
                $state,
                "color2",
                "blue"
              ),
              [sty.slotTargetEndIconcolor2_darkGray]: hasVariant(
                $state,
                "color2",
                "darkGray"
              ),
              [sty.slotTargetEndIconcolor2_green]: hasVariant(
                $state,
                "color2",
                "green"
              ),
              [sty.slotTargetEndIconcolor2_indigo]: hasVariant(
                $state,
                "color2",
                "indigo"
              ),
              [sty.slotTargetEndIconcolor2_link]: hasVariant(
                $state,
                "color2",
                "link"
              ),
              [sty.slotTargetEndIconcolor2_navLink]: hasVariant(
                $state,
                "color2",
                "navLink"
              ),
              [sty.slotTargetEndIconcolor2_red]: hasVariant(
                $state,
                "color2",
                "red"
              ),
              [sty.slotTargetEndIconcolor2_white]: hasVariant(
                $state,
                "color2",
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
  const b = pp.useButton<P, typeof PlasmicButton>(
    PlasmicButton,
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
  PlasmicButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicButton__VariantsArgs;
    args?: PlasmicButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicButton__ArgsType,
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
          internalArgPropNames: PlasmicButton__ArgProps,
          internalVariantPropNames: PlasmicButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton";
  } else {
    func.displayName = `PlasmicButton.${nodeName}`;
  }
  return func;
}

export const PlasmicButton = Object.assign(
  // Top-level PlasmicButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicButton
    internalVariantProps: PlasmicButton__VariantProps,
    internalArgProps: PlasmicButton__ArgProps,

    useBehavior
  }
);

export default PlasmicButton;
/* prettier-ignore-end */
