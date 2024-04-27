// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: e2Wrjg6Dz94BkfogsCYoEo
// Component: JbYIy_ldO41D

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

import Button from "../../Button"; // plasmic-import: dBCQUhJCSZs2/component

import { useScreenVariants as useScreenVariantseatfCtt4BrEn } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: eatfCTT4BrEN/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: e2Wrjg6Dz94BkfogsCYoEo/projectcss
import sty from "./PlasmicCallToActionSection.module.css"; // plasmic-import: JbYIy_ldO41D/css

import AppleIcon from "./icons/PlasmicIcon__Apple"; // plasmic-import: 563f33iyx-K3/icon
import ChevronRightIcon from "./icons/PlasmicIcon__ChevronRight"; // plasmic-import: HEPvTyIN4GhK/icon

createPlasmicElementProxy;

export type PlasmicCallToActionSection__VariantMembers = {};
export type PlasmicCallToActionSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicCallToActionSection__VariantsArgs;
export const PlasmicCallToActionSection__VariantProps =
  new Array<VariantPropType>();

export type PlasmicCallToActionSection__ArgsType = {
  image?: React.ComponentProps<typeof PlasmicImg__>["src"];
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicCallToActionSection__ArgsType;
export const PlasmicCallToActionSection__ArgProps = new Array<ArgPropType>(
  "image",
  "children"
);

export type PlasmicCallToActionSection__OverridesType = {
  root?: Flex__<"div">;
  art?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  blend?: Flex__<"div">;
  copy?: Flex__<"div">;
};

export interface DefaultCallToActionSectionProps {
  image?: React.ComponentProps<typeof PlasmicImg__>["src"];
  children?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCallToActionSection__RenderFunc(props: {
  variants: PlasmicCallToActionSection__VariantsArgs;
  args: PlasmicCallToActionSection__ArgsType;
  overrides: PlasmicCallToActionSection__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          image: {
            src: "/plasmic/daply_landing/images/meeting.jpg",
            fullWidth: 2916,
            fullHeight: 1787,
            aspectRatio: undefined
          }
        },
        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantseatfCtt4BrEn()
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
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
      <div className={classNames(projectcss.all, sty.freeBox__fDzTt)}>
        <div
          data-plasmic-name={"art"}
          data-plasmic-override={overrides.art}
          className={classNames(projectcss.all, sty.art)}
        >
          <PlasmicImg__
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            src={args.image}
          />

          <div
            data-plasmic-name={"blend"}
            data-plasmic-override={overrides.blend}
            className={classNames(projectcss.all, sty.blend)}
          />
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__s2DT)}>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__fKkYq)}
          >
            <Stack__
              as={"div"}
              data-plasmic-name={"copy"}
              data-plasmic-override={overrides.copy}
              hasGap={true}
              className={classNames(projectcss.all, sty.copy)}
            >
              {renderPlasmicSlot({
                defaultContents: (
                  <React.Fragment>
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__hnT69)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__dpUd
                        )}
                      >
                        {"Welcome"}
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__kogmb
                        )}
                      >
                        {"Let's get going"}
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__t9UbI
                        )}
                      >
                        {
                          "Consectetur a adipiscing sagittis sed proin libero himenaeos ornare adipiscing suscipit leo vestibulum facilisi consequat nisi nisi adipiscing habitant facilisis suspendisse hac integer eget quam facilisis sem placerat fames."
                        }
                      </div>
                    </Stack__>
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__z2CN9)}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__rQzCg
                        )}
                        color2={"blue"}
                        endIcon={
                          <ChevronRightIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__iqjyY
                            )}
                            role={"img"}
                          />
                        }
                        showEndIcon={true}
                        submitsForm={true}
                      >
                        {"Start now"}
                      </Button>
                      <Button
                        bgDifference={true}
                        className={classNames(
                          "__wab_instance",
                          sty.button__aWnXu
                        )}
                        submitsForm={true}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__qidDd
                          )}
                        >
                          {"Learn more\u2026"}
                        </div>
                      </Button>
                    </Stack__>
                  </React.Fragment>
                ),
                value: args.children
              })}
            </Stack__>
          </Stack__>
        </div>
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "art", "img", "blend", "copy"],
  art: ["art", "img", "blend"],
  img: ["img"],
  blend: ["blend"],
  copy: ["copy"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  art: "div";
  img: typeof PlasmicImg__;
  blend: "div";
  copy: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCallToActionSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCallToActionSection__VariantsArgs;
    args?: PlasmicCallToActionSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCallToActionSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCallToActionSection__ArgsType,
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
          internalArgPropNames: PlasmicCallToActionSection__ArgProps,
          internalVariantPropNames: PlasmicCallToActionSection__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCallToActionSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCallToActionSection";
  } else {
    func.displayName = `PlasmicCallToActionSection.${nodeName}`;
  }
  return func;
}

export const PlasmicCallToActionSection = Object.assign(
  // Top-level PlasmicCallToActionSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    art: makeNodeComponent("art"),
    img: makeNodeComponent("img"),
    blend: makeNodeComponent("blend"),
    copy: makeNodeComponent("copy"),

    // Metadata about props expected for PlasmicCallToActionSection
    internalVariantProps: PlasmicCallToActionSection__VariantProps,
    internalArgProps: PlasmicCallToActionSection__ArgProps
  }
);

export default PlasmicCallToActionSection;
/* prettier-ignore-end */
