// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: e2Wrjg6Dz94BkfogsCYoEo
// Component: RWEirKIQE6N-

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

import Logo from "../../Logo"; // plasmic-import: FJeM-IovKNGT/component
import Button from "../../Button"; // plasmic-import: dBCQUhJCSZs2/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: e2Wrjg6Dz94BkfogsCYoEo/projectcss
import sty from "./PlasmicNavbarMobile.module.css"; // plasmic-import: RWEirKIQE6N-/css

import BarsSolidsvgIcon from "./icons/PlasmicIcon__BarsSolidsvg"; // plasmic-import: uG_z26ILKyPq/icon
import XmarkSolidsvgIcon from "./icons/PlasmicIcon__XmarkSolidsvg"; // plasmic-import: 59AFIWNl0DKP/icon
import AppleIcon from "./icons/PlasmicIcon__Apple"; // plasmic-import: 563f33iyx-K3/icon
import NewspaperDuotone1Svg2Icon from "./icons/PlasmicIcon__NewspaperDuotone1Svg2"; // plasmic-import: 3tXv1iSP0O2P/icon
import BookDuotonesvgIcon from "./icons/PlasmicIcon__BookDuotonesvg"; // plasmic-import: 6UTw5wtu80dw/icon
import ArrowRightToArcSolidsvgIcon from "./icons/PlasmicIcon__ArrowRightToArcSolidsvg"; // plasmic-import: elZYR_EjRN7S/icon

createPlasmicElementProxy;

export type PlasmicNavbarMobile__VariantMembers = {
  states5: "unnamedVariant2";
  open: "open";
  scrolled: "scrolled";
};
export type PlasmicNavbarMobile__VariantsArgs = {
  states5?: MultiChoiceArg<"unnamedVariant2">;
  open?: SingleBooleanChoiceArg<"open">;
  scrolled?: SingleBooleanChoiceArg<"scrolled">;
};
type VariantPropType = keyof PlasmicNavbarMobile__VariantsArgs;
export const PlasmicNavbarMobile__VariantProps = new Array<VariantPropType>(
  "states5",
  "open",
  "scrolled"
);

export type PlasmicNavbarMobile__ArgsType = {};
type ArgPropType = keyof PlasmicNavbarMobile__ArgsType;
export const PlasmicNavbarMobile__ArgProps = new Array<ArgPropType>();

export type PlasmicNavbarMobile__OverridesType = {
  root?: Flex__<"div">;
  logo?: Flex__<typeof Logo>;
};

export interface DefaultNavbarMobileProps {
  states5?: MultiChoiceArg<"unnamedVariant2">;
  open?: SingleBooleanChoiceArg<"open">;
  scrolled?: SingleBooleanChoiceArg<"scrolled">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNavbarMobile__RenderFunc(props: {
  variants: PlasmicNavbarMobile__VariantsArgs;
  args: PlasmicNavbarMobile__ArgsType;
  overrides: PlasmicNavbarMobile__OverridesType;
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
        path: "states5",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.states5
      },
      {
        path: "open",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.open
      },
      {
        path: "scrolled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.scrolled
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
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootopen]: hasVariant($state, "open", "open"),
          [sty.rootopen_scrolled]:
            hasVariant($state, "scrolled", "scrolled") &&
            hasVariant($state, "open", "open"),
          [sty.rootscrolled]: hasVariant($state, "scrolled", "scrolled"),
          [sty.rootstates5_unnamedVariant2]: hasVariant(
            $state,
            "states5",
            "unnamedVariant2"
          )
        }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__caz1X, {
          [sty.freeBoxopen__caz1X9HoNa]: hasVariant($state, "open", "open"),
          [sty.freeBoxopen_scrolled__caz1X9HoNaPcFgJ]:
            hasVariant($state, "scrolled", "scrolled") &&
            hasVariant($state, "open", "open"),
          [sty.freeBoxscrolled__caz1XpcFgJ]: hasVariant(
            $state,
            "scrolled",
            "scrolled"
          ),
          [sty.freeBoxstates5_unnamedVariant2__caz1Xvlzfr]: hasVariant(
            $state,
            "states5",
            "unnamedVariant2"
          )
        })}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox__xDth, {
            [sty.freeBoxopen__xDth9HoNa]: hasVariant($state, "open", "open"),
            [sty.freeBoxscrolled__xDthpcFgJ]: hasVariant(
              $state,
              "scrolled",
              "scrolled"
            )
          })}
        >
          <div
            className={classNames(projectcss.all, sty.freeBox__vLn5, {
              [sty.freeBoxopen__vLn59HoNa]: hasVariant($state, "open", "open"),
              [sty.freeBoxstates5_unnamedVariant2__vLn5Vlzfr]: hasVariant(
                $state,
                "states5",
                "unnamedVariant2"
              )
            })}
          >
            <Logo
              data-plasmic-name={"logo"}
              data-plasmic-override={overrides.logo}
              className={classNames("__wab_instance", sty.logo)}
            />

            <Button
              className={classNames("__wab_instance", sty.button__o6Lox, {
                [sty.buttonopen__o6Lox9HoNa]: hasVariant(
                  $state,
                  "open",
                  "open"
                ),
                [sty.buttonstates5_unnamedVariant2__o6Loxvlzfr]: hasVariant(
                  $state,
                  "states5",
                  "unnamedVariant2"
                )
              })}
              color2={"whiteClear"}
              endIcon={
                <BarsSolidsvgIcon
                  className={classNames(projectcss.all, sty.svg___4OhLt)}
                  role={"img"}
                />
              }
              iconOnly={true}
              onClick={async event => {
                const $steps = {};

                $steps["updateStates"] = true
                  ? (() => {
                      const actionArgs = { vgroup: "open", operation: 2 };
                      return (({ vgroup, value }) => {
                        if (typeof value === "string") {
                          value = [value];
                        }

                        const oldValue = $stateGet($state, vgroup);
                        $stateSet($state, vgroup, !oldValue);
                        return !oldValue;
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["updateStates"] != null &&
                  typeof $steps["updateStates"] === "object" &&
                  typeof $steps["updateStates"].then === "function"
                ) {
                  $steps["updateStates"] = await $steps["updateStates"];
                }
              }}
              showEndIcon={true}
              startIcon={
                <PlasmicIcon__
                  PlasmicIconType={
                    hasVariant($state, "open", "open")
                      ? XmarkSolidsvgIcon
                      : hasVariant($state, "states5", "unnamedVariant2")
                      ? XmarkSolidsvgIcon
                      : BarsSolidsvgIcon
                  }
                  className={classNames(projectcss.all, sty.svg__pUo4V, {
                    [sty.svgopen__pUo4V9HoNa]: hasVariant(
                      $state,
                      "open",
                      "open"
                    ),
                    [sty.svgstates5_unnamedVariant2__pUo4VVlzfr]: hasVariant(
                      $state,
                      "states5",
                      "unnamedVariant2"
                    )
                  })}
                  role={"img"}
                />
              }
            >
              {"Open App"}
            </Button>
          </div>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__vt7FV, {
              [sty.freeBoxopen__vt7FV9HoNa]: hasVariant($state, "open", "open"),
              [sty.freeBoxopen_scrolled__vt7FV9HoNaPcFgJ]:
                hasVariant($state, "scrolled", "scrolled") &&
                hasVariant($state, "open", "open"),
              [sty.freeBoxscrolled__vt7FVpcFgJ]: hasVariant(
                $state,
                "scrolled",
                "scrolled"
              )
            })}
          >
            <Button
              className={classNames("__wab_instance", sty.button__xjfI5, {
                [sty.buttonopen__xjfI59HoNa]: hasVariant($state, "open", "open")
              })}
              endIcon={
                <NewspaperDuotone1Svg2Icon
                  className={classNames(projectcss.all, sty.svg__sXy4Y)}
                  role={"img"}
                />
              }
              showEndIcon={true}
            >
              {"News"}
            </Button>
            {(hasVariant($state, "open", "open") ? true : false) ? (
              <Button
                className={classNames("__wab_instance", sty.button__ryNeE, {
                  [sty.buttonopen__ryNeE9HoNa]: hasVariant(
                    $state,
                    "open",
                    "open"
                  )
                })}
                endIcon={
                  <BookDuotonesvgIcon
                    className={classNames(projectcss.all, sty.svg___31Stq)}
                    role={"img"}
                  />
                }
                showEndIcon={true}
              >
                {"Docs"}
              </Button>
            ) : null}
            {(hasVariant($state, "open", "open") ? true : false) ? (
              <Button
                className={classNames("__wab_instance", sty.button__kfgH, {
                  [sty.buttonopen__kfgH9HoNa]: hasVariant(
                    $state,
                    "open",
                    "open"
                  )
                })}
                color2={"blue"}
                endIcon={
                  <ArrowRightToArcSolidsvgIcon
                    className={classNames(projectcss.all, sty.svg__riGct)}
                    role={"img"}
                  />
                }
                showEndIcon={true}
              >
                {"Launch App"}
              </Button>
            ) : null}
          </Stack__>
        </div>
        <div
          className={classNames(projectcss.all, sty.freeBox__jvsnm, {
            [sty.freeBoxstates5_unnamedVariant2__jvsnmvlzfr]: hasVariant(
              $state,
              "states5",
              "unnamedVariant2"
            )
          })}
        >
          {(hasVariant($state, "states5", "unnamedVariant2") ? true : false) ? (
            <Button
              className={classNames("__wab_instance", sty.button___5R0U0, {
                [sty.buttonstates5_unnamedVariant2___5R0U0Vlzfr]: hasVariant(
                  $state,
                  "states5",
                  "unnamedVariant2"
                )
              })}
            />
          ) : null}
          {(hasVariant($state, "states5", "unnamedVariant2") ? true : false) ? (
            <Button
              className={classNames("__wab_instance", sty.button___0Zzt9, {
                [sty.buttonstates5_unnamedVariant2___0Zzt9Vlzfr]: hasVariant(
                  $state,
                  "states5",
                  "unnamedVariant2"
                )
              })}
            />
          ) : null}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "logo"],
  logo: ["logo"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  logo: typeof Logo;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavbarMobile__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavbarMobile__VariantsArgs;
    args?: PlasmicNavbarMobile__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavbarMobile__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNavbarMobile__ArgsType,
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
          internalArgPropNames: PlasmicNavbarMobile__ArgProps,
          internalVariantPropNames: PlasmicNavbarMobile__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavbarMobile__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbarMobile";
  } else {
    func.displayName = `PlasmicNavbarMobile.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbarMobile = Object.assign(
  // Top-level PlasmicNavbarMobile renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    logo: makeNodeComponent("logo"),

    // Metadata about props expected for PlasmicNavbarMobile
    internalVariantProps: PlasmicNavbarMobile__VariantProps,
    internalArgProps: PlasmicNavbarMobile__ArgProps
  }
);

export default PlasmicNavbarMobile;
/* prettier-ignore-end */
