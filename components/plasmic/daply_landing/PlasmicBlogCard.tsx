// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: e2Wrjg6Dz94BkfogsCYoEo
// Component: kH8bUv2Ub609

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
import sty from "./PlasmicBlogCard.module.css"; // plasmic-import: kH8bUv2Ub609/css

createPlasmicElementProxy;

export type PlasmicBlogCard__VariantMembers = {
  noTitle: "noTitle";
};
export type PlasmicBlogCard__VariantsArgs = {
  noTitle?: SingleBooleanChoiceArg<"noTitle">;
};
type VariantPropType = keyof PlasmicBlogCard__VariantsArgs;
export const PlasmicBlogCard__VariantProps = new Array<VariantPropType>(
  "noTitle"
);

export type PlasmicBlogCard__ArgsType = {
  children?: React.ReactNode;
  title?: React.ReactNode;
  title2?: React.ReactNode;
  children2?: React.ReactNode;
  title3?: React.ReactNode;
};
type ArgPropType = keyof PlasmicBlogCard__ArgsType;
export const PlasmicBlogCard__ArgProps = new Array<ArgPropType>(
  "children",
  "title",
  "title2",
  "children2",
  "title3"
);

export type PlasmicBlogCard__OverridesType = {
  root?: Flex__<"div">;
  h6?: Flex__<"h6">;
  header?: Flex__<"div">;
  span?: Flex__<"span">;
  body?: Flex__<"div">;
  header2?: Flex__<"div">;
  body2?: Flex__<"div">;
};

export interface DefaultBlogCardProps {
  children?: React.ReactNode;
  title?: React.ReactNode;
  title2?: React.ReactNode;
  children2?: React.ReactNode;
  title3?: React.ReactNode;
  noTitle?: SingleBooleanChoiceArg<"noTitle">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicBlogCard__RenderFunc(props: {
  variants: PlasmicBlogCard__VariantsArgs;
  args: PlasmicBlogCard__ArgsType;
  overrides: PlasmicBlogCard__OverridesType;
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
        path: "noTitle",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noTitle
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
        sty.root
      )}
    >
      <PlasmicImg__
        alt={""}
        className={classNames(sty.img__owoCy)}
        displayHeight={"100%"}
        displayMaxHeight={"200px"}
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
              return {
                src: "/plasmic/daply_landing/images/_7Cb00DbaE8994B82B7Ec94F37Bcb5077Png.png",
                fullWidth: 512,
                fullHeight: 512,
                aspectRatio: undefined
              };
            }
            throw e;
          }
        })()}
      />

      <div className={classNames(projectcss.all, sty.freeBox__mSgYl)}>
        <h6
          data-plasmic-name={"h6"}
          data-plasmic-override={overrides.h6}
          className={classNames(
            projectcss.all,
            projectcss.h6,
            projectcss.__wab_text,
            sty.h6
          )}
        >
          {"Enter some text"}
        </h6>
        <div
          data-plasmic-name={"header"}
          data-plasmic-override={overrides.header}
          className={classNames(projectcss.all, sty.header, {
            [sty.headernoTitle]: hasVariant($state, "noTitle", "noTitle")
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
            defaultContents: "Card title",
            value: args.title,
            className: classNames(sty.slotTargetTitle)
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
          data-plasmic-name={"body"}
          data-plasmic-override={overrides.body}
          className={classNames(projectcss.all, sty.body, {
            [sty.bodynoTitle]: hasVariant($state, "noTitle", "noTitle")
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__e2RuF
                  )}
                >
                  {"Enter some text"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ghYUo
                  )}
                >
                  {"something here"}
                </div>
              </React.Fragment>
            ),
            value: args.children
          })}
        </div>
      </div>
      {false ? (
        <div className={classNames(projectcss.all, sty.freeBox__wKxyZ)}>
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__oSie2)}
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
            className={classNames(projectcss.all, sty.header2, {
              [sty.header2noTitle]: hasVariant($state, "noTitle", "noTitle")
            })}
          >
            <div
              className={classNames(projectcss.all, sty.freeBox__ktAsu, {
                [sty.freeBoxnoTitle__ktAsu9DAdL]: hasVariant(
                  $state,
                  "noTitle",
                  "noTitle"
                )
              })}
            >
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
            className={classNames(projectcss.all, sty.body2, {
              [sty.body2noTitle]: hasVariant($state, "noTitle", "noTitle")
            })}
          >
            {renderPlasmicSlot({
              defaultContents: (
                <React.Fragment>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__btCf
                    )}
                  >
                    {"Enter some text"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__itRzs
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
  root: ["root", "h6", "header", "span", "body", "header2", "body2"],
  h6: ["h6"],
  header: ["header", "span"],
  span: ["span"],
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
  body: "div";
  header2: "div";
  body2: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBlogCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBlogCard__VariantsArgs;
    args?: PlasmicBlogCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBlogCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBlogCard__ArgsType,
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
          internalArgPropNames: PlasmicBlogCard__ArgProps,
          internalVariantPropNames: PlasmicBlogCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBlogCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBlogCard";
  } else {
    func.displayName = `PlasmicBlogCard.${nodeName}`;
  }
  return func;
}

export const PlasmicBlogCard = Object.assign(
  // Top-level PlasmicBlogCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h6: makeNodeComponent("h6"),
    header: makeNodeComponent("header"),
    span: makeNodeComponent("span"),
    body: makeNodeComponent("body"),
    header2: makeNodeComponent("header2"),
    body2: makeNodeComponent("body2"),

    // Metadata about props expected for PlasmicBlogCard
    internalVariantProps: PlasmicBlogCard__VariantProps,
    internalArgProps: PlasmicBlogCard__ArgProps
  }
);

export default PlasmicBlogCard;
/* prettier-ignore-end */
