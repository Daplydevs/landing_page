// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: e2Wrjg6Dz94BkfogsCYoEo
// Component: trPESwWzhIQ

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
import Button from "../../Button"; // plasmic-import: dBCQUhJCSZs2/component
import { Embed } from "@plasmicpkgs/plasmic-basic-components";
import Section from "../../Section"; // plasmic-import: Rmg4dgTCPBXZ/component
import ValueProp from "../../ValueProp"; // plasmic-import: b8UA6WVbb5xL/component
import { AntdAccordion } from "@plasmicpkgs/antd5/skinny/registerCollapse";
import { accordionHelpers as AntdAccordion_Helpers } from "@plasmicpkgs/antd5/skinny/registerCollapse";
import { AntdAccordionItem } from "@plasmicpkgs/antd5/skinny/registerCollapse";
import FooterSection from "../../FooterSection"; // plasmic-import: 7rGOkW3yxftm/component

import { useScreenVariants as useScreenVariantseatfCtt4BrEn } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: eatfCTT4BrEN/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: e2Wrjg6Dz94BkfogsCYoEo/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: trPESwWzhIQ/css

import AppleIcon from "./icons/PlasmicIcon__Apple"; // plasmic-import: 563f33iyx-K3/icon
import ChevronRightIcon from "./icons/PlasmicIcon__ChevronRight"; // plasmic-import: HEPvTyIN4GhK/icon
import CircleNodesDuotone1SvgIcon from "./icons/PlasmicIcon__CircleNodesDuotone1Svg"; // plasmic-import: BPlNUGzXlC5h/icon
import NewspaperDuotone1SvgIcon from "./icons/PlasmicIcon__NewspaperDuotone1Svg"; // plasmic-import: g1f9Vb9J7OUg/icon
import BullseyePointerDuotonesvgIcon from "./icons/PlasmicIcon__BullseyePointerDuotonesvg"; // plasmic-import: bZ2badIKOcLx/icon
import EarthAmericasDuotonesvgIcon from "./icons/PlasmicIcon__EarthAmericasDuotonesvg"; // plasmic-import: H6Xnyi942ZBg/icon

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: Flex__<"div">;
  navbar?: Flex__<typeof Navbar>;
  headerHeroSection?: Flex__<"div">;
  valuePropsSection?: Flex__<typeof Section>;
  logoCloudSection?: Flex__<typeof Section>;
  faqSection?: Flex__<typeof Section>;
  accordion2?: Flex__<typeof AntdAccordion>;
  footerSection?: Flex__<typeof FooterSection>;
};

export interface DefaultHomepageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
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
        path: "accordion2.activePanelId",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "1",

        onMutate: generateOnMutateForSpec(
          "activePanelId",
          AntdAccordion_Helpers
        )
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantseatfCtt4BrEn()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicHomepage.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicHomepage.pageMetadata.title}
        />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicHomepage.pageMetadata.title}
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
          <div
            className={classNames(
              projectcss.all,
              sty.freeBox__j2Phk,
              "top-nav"
            )}
            id={"topNav"}
          >
            <Navbar
              data-plasmic-name={"navbar"}
              data-plasmic-override={overrides.navbar}
              className={classNames("__wab_instance", sty.navbar)}
              scrolled={(() => {
                try {
                  return $ctx.isScrolled;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return [];
                  }
                  throw e;
                }
              })()}
            />
          </div>
          <Stack__
            as={"div"}
            data-plasmic-name={"headerHeroSection"}
            data-plasmic-override={overrides.headerHeroSection}
            hasGap={true}
            className={classNames(projectcss.all, sty.headerHeroSection)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns___9DKaa)}
            >
              <div className={classNames(projectcss.all, sty.column__o5I62)}>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___0NcGo)}
                >
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__b3WXc)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__rlBey)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__rOaoc
                        )}
                      >
                        {"v1.3 Now Live"}
                      </div>
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__au9Ub
                      )}
                    >
                      <React.Fragment>
                        <React.Fragment>{"Scale your content "}</React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ textDecoration: "underline" }}
                        >
                          {"production"}
                        </span>
                      </React.Fragment>
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___7S0Dh
                      )}
                    >
                      {
                        "We make it easy to aggregate information and tailor highly specific content to meet your needs. "
                      }
                    </div>
                  </Stack__>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__hvz1X)}
                  >
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__lzcTl
                      )}
                      color2={"darkGray"}
                      endIcon={
                        <ChevronRightIcon
                          className={classNames(projectcss.all, sty.svg___1BU3)}
                          role={"img"}
                        />
                      }
                      showEndIcon={true}
                      submitsForm={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___0MlbS
                        )}
                      >
                        {"Start now"}
                      </div>
                    </Button>
                    <Button
                      bgDifference={true}
                      className={classNames(
                        "__wab_instance",
                        sty.button__iZdsi
                      )}
                      color2={"darkGray"}
                      submitsForm={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__h4Z76
                        )}
                      >
                        {"Learn more\u2026"}
                      </div>
                    </Button>
                  </Stack__>
                </Stack__>
              </div>
              <div className={classNames(projectcss.all, sty.column___240P)}>
                <div className={classNames(projectcss.all, sty.freeBox__nl4Wp)}>
                  <Embed
                    className={classNames(
                      "__wab_instance",
                      sty.embedHtml__woxf3
                    )}
                  />
                </div>
                <Embed
                  className={classNames("__wab_instance", sty.embedHtml__tL4P0)}
                  code={
                    '<iframe class="rounded-iframe" data-tally-src="https://tally.so/embed/wg5WLM?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="Start scaling your content today"></iframe>\r\n\r\n<script>\r\n    var d = document,\r\n        w = "https://tally.so/widgets/embed.js",\r\n        v = function () {\r\n            "undefined" != typeof Tally ? Tally.loadEmbeds() : d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function (e) {\r\n                e.src = e.dataset.tallySrc\r\n            }))\r\n        };\r\n    if ("undefined" != typeof Tally) v();\r\n    else if (d.querySelector(\'script[src="\' + w + \'"]\') == null) {\r\n        var s = d.createElement("script");\r\n        s.src = w, s.onload = v, s.onerror = v, d.body.appendChild(s)\r\n    };\r\n</script>\r\n\r\n<style>\r\n    .rounded-iframe {\r\n        border-radius: 10px;\r\n        overflow: hidden;\r\n    }\r\n</style>\r\n'
                  }
                />
              </div>
            </Stack__>
          </Stack__>
          <Section
            data-plasmic-name={"valuePropsSection"}
            data-plasmic-override={overrides.valuePropsSection}
            background={"white"}
            className={classNames("__wab_instance", sty.valuePropsSection)}
            size={"fullContentWidth"}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__mY8)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__p9KU)}>
                <h2
                  className={classNames(
                    projectcss.all,
                    projectcss.h2,
                    projectcss.__wab_text,
                    sty.h2__mKMsT
                  )}
                >
                  {"Scale your content effortlessly"}
                </h2>
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ox0E9
                )}
              >
                {
                  "Consectetur a adipiscing sagittis sed proin libero himenaeos ornare adipiscing suscipit leo vestibulum facilisi consequat nisi nisi adipiscing habitant facilisis suspendisse hac integer eget quam facilisis sem placerat fames."
                }
              </div>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__li3Ns)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.columns__gbo8C)}
                >
                  <div
                    className={classNames(projectcss.all, sty.column__r4UGk)}
                  >
                    <ValueProp
                      className={classNames(
                        "__wab_instance",
                        sty.valueProp__mwUfr
                      )}
                      colored={true}
                      description={
                        "Nulla odio mauris enim parturient adipiscing vestibulum inceptos."
                      }
                      icon={
                        <CircleNodesDuotone1SvgIcon
                          className={classNames(projectcss.all, sty.svg__umOWr)}
                          role={"img"}
                        />
                      }
                      title={"Aggregated Data Sources"}
                      vertical={true}
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.column__oroAj)}
                  >
                    <ValueProp
                      className={classNames(
                        "__wab_instance",
                        sty.valueProp__yqk44
                      )}
                      colored={true}
                      description={
                        "Consequat scelerisque a eros taciti nisl a sodales."
                      }
                      icon={
                        <NewspaperDuotone1SvgIcon
                          className={classNames(projectcss.all, sty.svg__dbmRu)}
                          role={"img"}
                        />
                      }
                      title={"Content Production Autopilot"}
                      vertical={true}
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.column__kwl2G)}
                  >
                    <ValueProp
                      className={classNames(
                        "__wab_instance",
                        sty.valueProp__mpfn1
                      )}
                      colored={true}
                      description={
                        "Nulla odio mauris enim parturient adipiscing vestibulum inceptos."
                      }
                      icon={
                        <CircleNodesDuotone1SvgIcon
                          className={classNames(projectcss.all, sty.svg__ekm)}
                          role={"img"}
                        />
                      }
                      title={"Repacked Content"}
                      vertical={true}
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.column__wRwCu)}
                  >
                    <ValueProp
                      className={classNames(
                        "__wab_instance",
                        sty.valueProp__o8YEi
                      )}
                      colored={true}
                      description={
                        "Consequat scelerisque a eros taciti nisl a sodales."
                      }
                      icon={
                        <NewspaperDuotone1SvgIcon
                          className={classNames(projectcss.all, sty.svg__qZbCo)}
                          role={"img"}
                        />
                      }
                      title={"Build Knowledge Products"}
                      vertical={true}
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.column__kqdur)}
                  >
                    <ValueProp
                      className={classNames(
                        "__wab_instance",
                        sty.valueProp__zmdro
                      )}
                      colored={true}
                      description={
                        "At ut condimentum amet adipiscing ac diam a."
                      }
                      icon={
                        <BullseyePointerDuotonesvgIcon
                          className={classNames(projectcss.all, sty.svg__eh5CJ)}
                          role={"img"}
                        />
                      }
                      title={"Increase brand engagement"}
                      vertical={true}
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.column__yZv5J)}
                  >
                    <ValueProp
                      className={classNames(
                        "__wab_instance",
                        sty.valueProp__wxb7N
                      )}
                      colored={true}
                      description={
                        "Donec purus nec vestibulum volutpat vivamus vulputate suspendisse."
                      }
                      icon={
                        <EarthAmericasDuotonesvgIcon
                          className={classNames(projectcss.all, sty.svg__jv1F)}
                          role={"img"}
                        />
                      }
                      title={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__vCzxf
                          )}
                        >
                          {"Expand your audience reach"}
                        </div>
                      }
                      vertical={true}
                    />
                  </div>
                </Stack__>
              </Stack__>
            </Stack__>
          </Section>
          <Section
            data-plasmic-name={"logoCloudSection"}
            data-plasmic-override={overrides.logoCloudSection}
            className={classNames("__wab_instance", sty.logoCloudSection)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__mYjn0)}
            >
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__gdwV)}
                displayHeight={"48px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                src={{
                  src: "/plasmic/daply_landing/images/loom.svg",
                  fullWidth: 300,
                  fullHeight: 91,
                  aspectRatio: 3.303226
                }}
              />

              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__jq00)}
                displayHeight={"48px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                src={{
                  src: "/plasmic/daply_landing/images/strapi.svg",
                  fullWidth: 300,
                  fullHeight: 78,
                  aspectRatio: 3.849624
                }}
              />

              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__vvhap)}
                displayHeight={"48px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                src={{
                  src: "/plasmic/daply_landing/images/segment.svg",
                  fullWidth: 300,
                  fullHeight: 62,
                  aspectRatio: 4.87619
                }}
              />

              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__eiAqk)}
                displayHeight={"48px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                src={{
                  src: "/plasmic/daply_landing/images/xstate.svg",
                  fullWidth: 300,
                  fullHeight: 94,
                  aspectRatio: 3.2
                }}
              />

              <PlasmicImg__
                alt={""}
                className={classNames(sty.img___22Fk4)}
                displayHeight={"48px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                src={{
                  src: "/plasmic/daply_landing/images/mapbox.svg",
                  fullWidth: 300,
                  fullHeight: 67,
                  aspectRatio: 4.491228
                }}
              />
            </Stack__>
          </Section>
          <Section
            data-plasmic-name={"faqSection"}
            data-plasmic-override={overrides.faqSection}
            background={"white"}
            className={classNames("__wab_instance", sty.faqSection)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__k1HeW)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__r44H5)}>
                <h2
                  className={classNames(
                    projectcss.all,
                    projectcss.h2,
                    projectcss.__wab_text,
                    sty.h2__pdvtb
                  )}
                >
                  {"Common Questions"}
                </h2>
              </div>
            </Stack__>
            {(() => {
              const child$Props = {
                activeKey: generateStateValueProp($state, [
                  "accordion2",
                  "activePanelId"
                ]),
                bordered: false,
                className: classNames("__wab_instance", sty.accordion2),
                defaultActiveKey: "1",
                disabled: false,
                expandIconPosition: "start",
                ghost: false,
                items: (
                  <React.Fragment>
                    <AntdAccordionItem
                      className={classNames(
                        "__wab_instance",
                        sty.accordionItem__oJeGa
                      )}
                      id={1}
                      label2={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__ckD3O
                          )}
                        >
                          {"First Item"}
                        </div>
                      }
                      showArrow={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__n2QXn
                        )}
                      >
                        {"First Children"}
                      </div>
                    </AntdAccordionItem>
                    <AntdAccordionItem
                      className={classNames(
                        "__wab_instance",
                        sty.accordionItem___8W7LJ
                      )}
                      id={2}
                      label2={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__aisrO
                          )}
                        >
                          {"Second Item"}
                        </div>
                      }
                      showArrow={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__kheq5
                        )}
                      >
                        {"Second Children"}
                      </div>
                    </AntdAccordionItem>
                  </React.Fragment>
                ),

                onChange: generateStateOnChangePropForCodeComponents(
                  $state,
                  "activePanelId",
                  ["accordion2", "activePanelId"],
                  AntdAccordion_Helpers
                ),
                size: "middle"
              };
              initializeCodeComponentStates(
                $state,
                [
                  {
                    name: "activePanelId",
                    plasmicStateName: "accordion2.activePanelId"
                  }
                ],

                [],
                AntdAccordion_Helpers ?? {},
                child$Props
              );

              return (
                <AntdAccordion
                  data-plasmic-name={"accordion2"}
                  data-plasmic-override={overrides.accordion2}
                  {...child$Props}
                />
              );
            })()}
          </Section>
          <FooterSection
            data-plasmic-name={"footerSection"}
            data-plasmic-override={overrides.footerSection}
            className={classNames("__wab_instance", sty.footerSection)}
            dark={true}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbar",
    "headerHeroSection",
    "valuePropsSection",
    "logoCloudSection",
    "faqSection",
    "accordion2",
    "footerSection"
  ],

  navbar: ["navbar"],
  headerHeroSection: ["headerHeroSection"],
  valuePropsSection: ["valuePropsSection"],
  logoCloudSection: ["logoCloudSection"],
  faqSection: ["faqSection", "accordion2"],
  accordion2: ["accordion2"],
  footerSection: ["footerSection"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  headerHeroSection: "div";
  valuePropsSection: typeof Section;
  logoCloudSection: typeof Section;
  faqSection: typeof Section;
  accordion2: typeof AntdAccordion;
  footerSection: typeof FooterSection;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
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
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    headerHeroSection: makeNodeComponent("headerHeroSection"),
    valuePropsSection: makeNodeComponent("valuePropsSection"),
    logoCloudSection: makeNodeComponent("logoCloudSection"),
    faqSection: makeNodeComponent("faqSection"),
    accordion2: makeNodeComponent("accordion2"),
    footerSection: makeNodeComponent("footerSection"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "The Content Scaling Engine | Daply",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
