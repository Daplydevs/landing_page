// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: e2Wrjg6Dz94BkfogsCYoEo
// Component: GqL2vzWXD3Cj

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: e2Wrjg6Dz94BkfogsCYoEo/projectcss
import sty from "./PlasmicBlogCardRightLarge.module.css"; // plasmic-import: GqL2vzWXD3Cj/css

createPlasmicElementProxy;

export type PlasmicBlogCardRightLarge__VariantMembers = {
  leftImage2NoImage: "leftImage2NoImage";
};
export type PlasmicBlogCardRightLarge__VariantsArgs = {
  leftImage2NoImage?: SingleBooleanChoiceArg<"leftImage2NoImage">;
};
type VariantPropType = keyof PlasmicBlogCardRightLarge__VariantsArgs;
export const PlasmicBlogCardRightLarge__VariantProps =
  new Array<VariantPropType>("leftImage2NoImage");

export type PlasmicBlogCardRightLarge__ArgsType = {
  children?: React.ReactNode;
  title?: React.ReactNode;
  title2?: React.ReactNode;
  children2?: React.ReactNode;
  title3?: React.ReactNode;
};
type ArgPropType = keyof PlasmicBlogCardRightLarge__ArgsType;
export const PlasmicBlogCardRightLarge__ArgProps = new Array<ArgPropType>(
  "children",
  "title",
  "title2",
  "children2",
  "title3"
);

export type PlasmicBlogCardRightLarge__OverridesType = {
  root?: Flex__<"div">;
  h6?: Flex__<"h6">;
  header?: Flex__<"div">;
  span?: Flex__<"span">;
  text?: Flex__<"div">;
  body?: Flex__<"div">;
  header2?: Flex__<"div">;
  body2?: Flex__<"div">;
};

export interface DefaultBlogCardRightLargeProps {
  children?: React.ReactNode;
  title?: React.ReactNode;
  title2?: React.ReactNode;
  children2?: React.ReactNode;
  title3?: React.ReactNode;
  leftImage2NoImage?: SingleBooleanChoiceArg<"leftImage2NoImage">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicBlogCardRightLarge__RenderFunc(props: {
  variants: PlasmicBlogCardRightLarge__VariantsArgs;
  args: PlasmicBlogCardRightLarge__ArgsType;
  overrides: PlasmicBlogCardRightLarge__OverridesType;
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
        path: "leftImage2NoImage",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.leftImage2NoImage
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

  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover
  };

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
          [sty.rootleftImage2NoImage]: hasVariant(
            $state,
            "leftImage2NoImage",
            "leftImage2NoImage"
          )
        }
      )}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__h5RIz, {
          [sty.freeBoxleftImage2NoImage__h5RIZkGMsy]: hasVariant(
            $state,
            "leftImage2NoImage",
            "leftImage2NoImage"
          )
        })}
      >
        <h6
          data-plasmic-name={"h6"}
          data-plasmic-override={overrides.h6}
          className={classNames(
            projectcss.all,
            projectcss.h6,
            projectcss.__wab_text,
            sty.h6,
            {
              [sty.h6leftImage2NoImage]: hasVariant(
                $state,
                "leftImage2NoImage",
                "leftImage2NoImage"
              )
            }
          )}
        >
          {"Enter some text"}
        </h6>
        <div
          data-plasmic-name={"header"}
          data-plasmic-override={overrides.header}
          className={classNames(projectcss.all, sty.header, {
            [sty.headerleftImage2NoImage]: hasVariant(
              $state,
              "leftImage2NoImage",
              "leftImage2NoImage"
            )
          })}
        >
          <span
            data-plasmic-name={"span"}
            data-plasmic-override={overrides.span}
            className={classNames(
              projectcss.all,
              projectcss.span,
              projectcss.__wab_text,
              sty.span
            )}
          >
            {"Enter some text"}
          </span>
          {renderPlasmicSlot({
            defaultContents: "Content",
            value: args.title,
            className: classNames(sty.slotTargetTitle, {
              [sty.slotTargetTitleleftImage2NoImage]: hasVariant(
                $state,
                "leftImage2NoImage",
                "leftImage2NoImage"
              )
            })
          })}
          {false
            ? renderPlasmicSlot({
                defaultContents: "Card title",
                value: args.title3,
                className: classNames(sty.slotTargetTitle3)
              })
            : null}
        </div>
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          {"Enter some text"}
        </div>
        <div
          data-plasmic-name={"body"}
          data-plasmic-override={overrides.body}
          className={classNames(projectcss.all, sty.body, {
            [sty.bodyleftImage2NoImage]: hasVariant(
              $state,
              "leftImage2NoImage",
              "leftImage2NoImage"
            )
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <div className={classNames(projectcss.all, sty.freeBox__oIoRr)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__bi0Gi
                  )}
                >
                  {"something here"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__n5TKt
                  )}
                >
                  {"something here"}
                </div>
              </div>
            ),

            value: args.children
          })}
        </div>
      </Stack__>
      <div
        className={classNames(projectcss.all, sty.freeBox___5Vyty, {
          [sty.freeBoxleftImage2NoImage___5VytYkGMsy]: hasVariant(
            $state,
            "leftImage2NoImage",
            "leftImage2NoImage"
          )
        })}
      >
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__cbpwZ, {
            [sty.imgleftImage2NoImage__cbpwZkGMsy]: hasVariant(
              $state,
              "leftImage2NoImage",
              "leftImage2NoImage"
            )
          })}
          displayHeight={"100%"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={triggers.hover_root ? "100%" : "100%"}
          height={"200"}
          loading={"lazy"}
          src={
            triggers.hover_root
              ? (() => {
                  try {
                    return $ctx.plasmicCmsPostsItem.data.thumbnail.url;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return {
                        src: "/plasmic/daply_landing/images/daplyLogopng.png",
                        fullWidth: 216,
                        fullHeight: 216,
                        aspectRatio: undefined
                      };
                    }
                    throw e;
                  }
                })()
              : (() => {
                  try {
                    return $ctx.plasmicCmsPostsItem.data.thumbnail.url;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return {
                        src: "/plasmic/daply_landing/images/savepng.png",
                        fullWidth: 512,
                        fullHeight: 512,
                        aspectRatio: undefined
                      };
                    }
                    throw e;
                  }
                })()
          }
        />
      </div>
      {false ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__hesS1, {
            [sty.freeBoxleftImage2NoImage__hesS1KGMsy]: hasVariant(
              $state,
              "leftImage2NoImage",
              "leftImage2NoImage"
            )
          })}
        >
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__lPuzR)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"283px"}
            height={"200"}
            loading={"lazy"}
            src={(() => {
              try {
                return $ctx.plasmicCmsPostsItem.data.thumbnail.url;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return undefined;
                }
                throw e;
              }
            })()}
          />

          <div
            data-plasmic-name={"header2"}
            data-plasmic-override={overrides.header2}
            className={classNames(projectcss.all, sty.header2)}
          >
            <div className={classNames(projectcss.all, sty.freeBox___78Hhw)}>
              {renderPlasmicSlot({
                defaultContents: "Card title",
                value: args.title2,
                className: classNames(sty.slotTargetTitle2)
              })}
            </div>
          </div>
          <div
            data-plasmic-name={"body2"}
            data-plasmic-override={overrides.body2}
            className={classNames(projectcss.all, sty.body2)}
          >
            {renderPlasmicSlot({
              defaultContents: (
                <React.Fragment>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___0Ofg
                    )}
                  >
                    {"Enter some text"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__lkb6C
                    )}
                  >
                    {"something here"}
                  </div>
                </React.Fragment>
              ),

              value: args.children2
            })}
          </div>
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h6", "header", "span", "text", "body", "header2", "body2"],
  h6: ["h6"],
  header: ["header", "span"],
  span: ["span"],
  text: ["text"],
  body: ["body"],
  header2: ["header2"],
  body2: ["body2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  h6: "h6";
  header: "div";
  span: "span";
  text: "div";
  body: "div";
  header2: "div";
  body2: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBlogCardRightLarge__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBlogCardRightLarge__VariantsArgs;
    args?: PlasmicBlogCardRightLarge__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBlogCardRightLarge__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBlogCardRightLarge__ArgsType,
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
          internalArgPropNames: PlasmicBlogCardRightLarge__ArgProps,
          internalVariantPropNames: PlasmicBlogCardRightLarge__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBlogCardRightLarge__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBlogCardRightLarge";
  } else {
    func.displayName = `PlasmicBlogCardRightLarge.${nodeName}`;
  }
  return func;
}

export const PlasmicBlogCardRightLarge = Object.assign(
  // Top-level PlasmicBlogCardRightLarge renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h6: makeNodeComponent("h6"),
    header: makeNodeComponent("header"),
    span: makeNodeComponent("span"),
    text: makeNodeComponent("text"),
    body: makeNodeComponent("body"),
    header2: makeNodeComponent("header2"),
    body2: makeNodeComponent("body2"),

    // Metadata about props expected for PlasmicBlogCardRightLarge
    internalVariantProps: PlasmicBlogCardRightLarge__VariantProps,
    internalArgProps: PlasmicBlogCardRightLarge__ArgProps
  }
);

export default PlasmicBlogCardRightLarge;
/* prettier-ignore-end */
