// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: e2Wrjg6Dz94BkfogsCYoEo
// Component: loGveCNgEVMe

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

import Navbar from "../../Navbar"; // plasmic-import: l9zB0gKjLGnY/component
import { CmsQueryRepeater } from "@plasmicpkgs/plasmic-cms";
import Video from "../../Video"; // plasmic-import: pkCQ83zE8JFd/component
import { Embed } from "@plasmicpkgs/plasmic-basic-components";
import BlogCardLeft from "../../BlogCardLeft"; // plasmic-import: Ueq-CzAs1AdM/component
import CallToActionSection from "../../CallToActionSection"; // plasmic-import: JbYIy_ldO41D/component
import Button from "../../Button"; // plasmic-import: dBCQUhJCSZs2/component
import FooterSection from "../../FooterSection"; // plasmic-import: 7rGOkW3yxftm/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: e2Wrjg6Dz94BkfogsCYoEo/projectcss
import sty from "./PlasmicHomepage3.module.css"; // plasmic-import: loGveCNgEVMe/css

import CalendarDayssvgIcon from "./icons/PlasmicIcon__CalendarDayssvg"; // plasmic-import: oUDFXeC9bRSg/icon
import AppleIcon from "./icons/PlasmicIcon__Apple"; // plasmic-import: 563f33iyx-K3/icon
import ChevronRightIcon from "./icons/PlasmicIcon__ChevronRight"; // plasmic-import: HEPvTyIN4GhK/icon

createPlasmicElementProxy;

export type PlasmicHomepage3__VariantMembers = {};
export type PlasmicHomepage3__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage3__VariantsArgs;
export const PlasmicHomepage3__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage3__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage3__ArgsType;
export const PlasmicHomepage3__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage3__OverridesType = {
  root?: Flex__<"div">;
  h1?: Flex__<"h1">;
  svg?: Flex__<"svg">;
  video?: Flex__<typeof Video>;
  embedHtml?: Flex__<typeof Embed>;
  h3?: Flex__<"h3">;
  callToActionSection?: Flex__<typeof CallToActionSection>;
  footerSection?: Flex__<typeof FooterSection>;
};

export interface DefaultHomepage3Props {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage3__RenderFunc(props: {
  variants: PlasmicHomepage3__VariantsArgs;
  args: PlasmicHomepage3__ArgsType;
  overrides: PlasmicHomepage3__OverridesType;
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
        path: "youtube",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "no"
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
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicHomepage3.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicHomepage3.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicHomepage3.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <div className={classNames(projectcss.all, sty.freeBox__iUmsD)}>
            <Navbar
              className={classNames("__wab_instance", sty.navbar__lzZwy)}
              newsHeader={"dark"}
            />

            <Navbar
              className={classNames("__wab_instance", sty.navbar___6EU4G)}
              newsCategory={true}
              newsHeader={"dark"}
            />
          </div>
          <CmsQueryRepeater
            className={classNames("__wab_instance", sty.cmsDataFetcher__jI0Sp)}
            desc={false}
            emptyMessage={
              <DataCtxReader__>
                {$ctx => (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__dFiuV
                    )}
                  >
                    {"No matching published entries found."}
                  </div>
                )}
              </DataCtxReader__>
            }
            filterField={"title"}
            filterValue={(() => {
              try {
                return $ctx.params.title;
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
            forceEmptyState={false}
            forceLoadingState={false}
            limit={0}
            loadingMessage={
              <DataCtxReader__>
                {$ctx => (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__cCkN
                    )}
                  >
                    {"Loading..."}
                  </div>
                )}
              </DataCtxReader__>
            }
            noAutoRepeat={false}
            noLayout={false}
            table={"posts"}
            useDraft={false}
          >
            <DataCtxReader__>
              {$ctx => (
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__qKa1)}
                >
                  <h4
                    className={classNames(
                      projectcss.all,
                      projectcss.h4,
                      projectcss.__wab_text,
                      sty.h4__xsfl
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return $ctx.plasmicCmsPostsItem.data.categoryName;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  </h4>
                  <h1
                    data-plasmic-name={"h1"}
                    data-plasmic-override={overrides.h1}
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return $ctx.plasmicCmsPostsItem.data.title;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  </h1>
                  <h4
                    className={classNames(
                      projectcss.all,
                      projectcss.h4,
                      projectcss.__wab_text,
                      sty.h4__q7YDg
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return $ctx.plasmicCmsPostsItem.data.description;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  </h4>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___8CIxF)}
                  >
                    <h6
                      className={classNames(
                        projectcss.all,
                        projectcss.h6,
                        projectcss.__wab_text,
                        sty.h6__dGjQi
                      )}
                    >
                      {"By"}
                    </h6>
                    <h6
                      className={classNames(
                        projectcss.all,
                        projectcss.h6,
                        projectcss.__wab_text,
                        sty.h6__i4YRd
                      )}
                    >
                      <React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ color: "var(--token-rvqSfmjWOZ82)" }}
                        >
                          {"Daply Team"}
                        </span>
                      </React.Fragment>
                    </h6>
                  </Stack__>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__lf5Cf)}
                  >
                    <CalendarDayssvgIcon
                      data-plasmic-name={"svg"}
                      data-plasmic-override={overrides.svg}
                      className={classNames(projectcss.all, sty.svg)}
                      role={"img"}
                    />

                    <h6
                      className={classNames(
                        projectcss.all,
                        projectcss.h6,
                        projectcss.__wab_text,
                        sty.h6__dGcg
                      )}
                    >
                      <React.Fragment>
                        {(() => {
                          try {
                            return (() => {
                              const formattedDate = new Date(
                                $ctx.plasmicCmsPostsItem.data.publishDate
                              ).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric"
                              });
                              return formattedDate;
                            })();
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return "";
                            }
                            throw e;
                          }
                        })()}
                      </React.Fragment>
                    </h6>
                  </Stack__>
                  {(() => {
                    try {
                      return true;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return true;
                      }
                      throw e;
                    }
                  })() ? (
                    <Video
                      data-plasmic-name={"video"}
                      data-plasmic-override={overrides.video}
                      className={classNames("__wab_instance", sty.video)}
                    />
                  ) : null}
                  <Embed
                    data-plasmic-name={"embedHtml"}
                    data-plasmic-override={overrides.embedHtml}
                    className={classNames("__wab_instance", sty.embedHtml)}
                    code={(() => {
                      try {
                        return $ctx.plasmicCmsPostsItem.data.content;
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
                </Stack__>
              )}
            </DataCtxReader__>
          </CmsQueryRepeater>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__pJlto)}
          >
            <h3
              data-plasmic-name={"h3"}
              data-plasmic-override={overrides.h3}
              className={classNames(
                projectcss.all,
                projectcss.h3,
                projectcss.__wab_text,
                sty.h3
              )}
            >
              {"Related Content"}
            </h3>
            <CmsQueryRepeater
              className={classNames("__wab_instance", sty.cmsDataFetcher__nVpo)}
              desc={false}
              emptyMessage={
                <DataCtxReader__>
                  {$ctx => (
                    <React.Fragment>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__xuSHo
                        )}
                      >
                        {"No matching published entries found."}
                      </div>
                      <BlogCardLeft
                        className={classNames(
                          "__wab_instance",
                          sty.blogCardLeft__c0DNn
                        )}
                      />
                    </React.Fragment>
                  )}
                </DataCtxReader__>
              }
              forceEmptyState={false}
              forceLoadingState={false}
              limit={8}
              loadingMessage={
                <DataCtxReader__>
                  {$ctx => (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___4UR5F
                      )}
                    >
                      {"Loading..."}
                    </div>
                  )}
                </DataCtxReader__>
              }
              noAutoRepeat={false}
              noLayout={false}
              table={"posts"}
              useDraft={false}
            >
              <DataCtxReader__>
                {$ctx => (
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__yTn75)}
                  >
                    <BlogCardLeft
                      className={classNames(
                        "__wab_instance",
                        sty.blogCardLeft__i6Hdt
                      )}
                      title={
                        <React.Fragment>
                          {(() => {
                            try {
                              return $ctx.plasmicCmsPostsItem.data.title;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return "Card title";
                              }
                              throw e;
                            }
                          })()}
                        </React.Fragment>
                      }
                    />
                  </Stack__>
                )}
              </DataCtxReader__>
            </CmsQueryRepeater>
          </Stack__>
          <CallToActionSection
            data-plasmic-name={"callToActionSection"}
            data-plasmic-override={overrides.callToActionSection}
            className={classNames("__wab_instance", sty.callToActionSection)}
            image={{
              src: "/plasmic/daply_landing/images/meeting.jpg",
              fullWidth: 2916,
              fullHeight: 1787,
              aspectRatio: undefined
            }}
          />

          <FooterSection
            data-plasmic-name={"footerSection"}
            data-plasmic-override={overrides.footerSection}
            className={classNames("__wab_instance", sty.footerSection)}
            dark={true}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__rFtLl
            )}
          >
            {"Here's how 3 entreprenuers made it in America"}
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "h1",
    "svg",
    "video",
    "embedHtml",
    "h3",
    "callToActionSection",
    "footerSection"
  ],
  h1: ["h1"],
  svg: ["svg"],
  video: ["video"],
  embedHtml: ["embedHtml"],
  h3: ["h3"],
  callToActionSection: ["callToActionSection"],
  footerSection: ["footerSection"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  h1: "h1";
  svg: "svg";
  video: typeof Video;
  embedHtml: typeof Embed;
  h3: "h3";
  callToActionSection: typeof CallToActionSection;
  footerSection: typeof FooterSection;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage3__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage3__VariantsArgs;
    args?: PlasmicHomepage3__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage3__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage3__ArgsType,
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
          internalArgPropNames: PlasmicHomepage3__ArgProps,
          internalVariantPropNames: PlasmicHomepage3__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage3__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage3";
  } else {
    func.displayName = `PlasmicHomepage3.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage3 = Object.assign(
  // Top-level PlasmicHomepage3 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),
    svg: makeNodeComponent("svg"),
    video: makeNodeComponent("video"),
    embedHtml: makeNodeComponent("embedHtml"),
    h3: makeNodeComponent("h3"),
    callToActionSection: makeNodeComponent("callToActionSection"),
    footerSection: makeNodeComponent("footerSection"),

    // Metadata about props expected for PlasmicHomepage3
    internalVariantProps: PlasmicHomepage3__VariantProps,
    internalArgProps: PlasmicHomepage3__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "[title]",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage3;
/* prettier-ignore-end */