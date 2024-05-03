// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: e2Wrjg6Dz94BkfogsCYoEo
// Component: g3CxlUrNVWAd

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

import Divider from "../../Divider"; // plasmic-import: NZGgfRtuXhAO/component
import ValueProp from "../../ValueProp"; // plasmic-import: b8UA6WVbb5xL/component
import Button from "../../Button"; // plasmic-import: dBCQUhJCSZs2/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: e2Wrjg6Dz94BkfogsCYoEo/projectcss
import sty from "./PlasmicPriceCard.module.css"; // plasmic-import: g3CxlUrNVWAd/css

import CheckIcon from "./icons/PlasmicIcon__Check"; // plasmic-import: nEIP81smXuD5/icon
import AppleIcon from "./icons/PlasmicIcon__Apple"; // plasmic-import: 563f33iyx-K3/icon

createPlasmicElementProxy;

export type PlasmicPriceCard__VariantMembers = {
  primary: "primary";
  borders: "flatLeft" | "flatRight";
};
export type PlasmicPriceCard__VariantsArgs = {
  primary?: SingleBooleanChoiceArg<"primary">;
  borders?: MultiChoiceArg<"flatLeft" | "flatRight">;
};
type VariantPropType = keyof PlasmicPriceCard__VariantsArgs;
export const PlasmicPriceCard__VariantProps = new Array<VariantPropType>(
  "primary",
  "borders"
);

export type PlasmicPriceCard__ArgsType = {
  label?: React.ReactNode;
  dollars?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
};
type ArgPropType = keyof PlasmicPriceCard__ArgsType;
export const PlasmicPriceCard__ArgProps = new Array<ArgPropType>(
  "label",
  "dollars",
  "description",
  "action"
);

export type PlasmicPriceCard__OverridesType = {
  root?: Flex__<"div">;
  divider?: Flex__<typeof Divider>;
  button?: Flex__<typeof Button>;
};

export interface DefaultPriceCardProps {
  label?: React.ReactNode;
  dollars?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  primary?: SingleBooleanChoiceArg<"primary">;
  borders?: MultiChoiceArg<"flatLeft" | "flatRight">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPriceCard__RenderFunc(props: {
  variants: PlasmicPriceCard__VariantsArgs;
  args: PlasmicPriceCard__ArgsType;
  overrides: PlasmicPriceCard__OverridesType;
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
        path: "primary",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.primary
      },
      {
        path: "borders",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.borders
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
          [sty.rootborders_flatLeft]: hasVariant($state, "borders", "flatLeft"),
          [sty.rootborders_flatRight]: hasVariant(
            $state,
            "borders",
            "flatRight"
          ),
          [sty.rootprimary]: hasVariant($state, "primary", "primary")
        }
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__jJeym)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__hbeFp)}>
          <div className={classNames(projectcss.all, sty.freeBox__ayBtt)}>
            {renderPlasmicSlot({
              defaultContents: "Starter",
              value: args.label,
              className: classNames(sty.slotTargetLabel)
            })}
          </div>
        </div>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__adktf)}
        >
          <div className={classNames(projectcss.all, sty.freeBox___9S9Uk)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__oj1Gv
              )}
            >
              {""}
            </div>
            <div className={classNames(projectcss.all, sty.freeBox___0Jtkd)}>
              {renderPlasmicSlot({
                defaultContents: "8",
                value: args.dollars,
                className: classNames(sty.slotTargetDollars)
              })}
            </div>
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__lb6
            )}
          >
            {"/month"}
          </div>
        </Stack__>
      </Stack__>
      <Divider
        data-plasmic-name={"divider"}
        data-plasmic-override={overrides.divider}
        className={classNames("__wab_instance", sty.divider)}
      />

      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__m67WP)}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__hfSsa)}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <ValueProp
                  className={classNames(
                    "__wab_instance",
                    sty.valueProp___9Lp9L
                  )}
                  description={
                    "Vestibulum mollis odio dictum ultrices facilisis molestie vestibulum"
                  }
                  icon={
                    <CheckIcon
                      className={classNames(projectcss.all, sty.svg__uaNd6)}
                      role={"img"}
                    />
                  }
                />

                <ValueProp
                  className={classNames("__wab_instance", sty.valueProp___1Gw9)}
                  description={"Mus consequat a justo"}
                  icon={
                    <CheckIcon
                      className={classNames(projectcss.all, sty.svg__zJmcZ)}
                      role={"img"}
                    />
                  }
                />
              </React.Fragment>
            ),
            value: args.description
          })}
        </Stack__>
        <Button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          color2={hasVariant($state, "primary", "primary") ? "green" : "white"}
          extraSmallShadow={true}
          submitsForm={true}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ehqpY
                )}
              >
                {"Buy starter"}
              </div>
            ),
            value: args.action
          })}
        </Button>
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "divider", "button"],
  divider: ["divider"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  divider: typeof Divider;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPriceCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPriceCard__VariantsArgs;
    args?: PlasmicPriceCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPriceCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPriceCard__ArgsType,
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
          internalArgPropNames: PlasmicPriceCard__ArgProps,
          internalVariantPropNames: PlasmicPriceCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPriceCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPriceCard";
  } else {
    func.displayName = `PlasmicPriceCard.${nodeName}`;
  }
  return func;
}

export const PlasmicPriceCard = Object.assign(
  // Top-level PlasmicPriceCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    divider: makeNodeComponent("divider"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicPriceCard
    internalVariantProps: PlasmicPriceCard__VariantProps,
    internalArgProps: PlasmicPriceCard__ArgProps
  }
);

export default PlasmicPriceCard;
/* prettier-ignore-end */