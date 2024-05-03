// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: e2Wrjg6Dz94BkfogsCYoEo
// Component: NOJgg_Sy_SDB

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
import TextInput from "../../TextInput"; // plasmic-import: PXMFYnYwFhTS/component
import Checkbox from "../../Checkbox"; // plasmic-import: 8jCy7A4X6uDj/component
import Divider from "../../Divider"; // plasmic-import: NZGgfRtuXhAO/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: e2Wrjg6Dz94BkfogsCYoEo/projectcss
import sty from "./PlasmicSignUpPrompt.module.css"; // plasmic-import: NOJgg_Sy_SDB/css

import AppleIcon from "./icons/PlasmicIcon__Apple"; // plasmic-import: 563f33iyx-K3/icon
import GoogleIcon from "./icons/PlasmicIcon__Google"; // plasmic-import: 7sI0cnq4wbBn/icon
import SearchIcon from "./icons/PlasmicIcon__Search"; // plasmic-import: 4RsPkYPQwpxx/icon
import CheckIcon from "./icons/PlasmicIcon__Check"; // plasmic-import: nEIP81smXuD5/icon
import WandIcon from "./icons/PlasmicIcon__Wand"; // plasmic-import: m0JpArLEckQM/icon

createPlasmicElementProxy;

export type PlasmicSignUpPrompt__VariantMembers = {};
export type PlasmicSignUpPrompt__VariantsArgs = {};
type VariantPropType = keyof PlasmicSignUpPrompt__VariantsArgs;
export const PlasmicSignUpPrompt__VariantProps = new Array<VariantPropType>();

export type PlasmicSignUpPrompt__ArgsType = {};
type ArgPropType = keyof PlasmicSignUpPrompt__ArgsType;
export const PlasmicSignUpPrompt__ArgProps = new Array<ArgPropType>();

export type PlasmicSignUpPrompt__OverridesType = {
  root?: Flex__<"div">;
  textInput?: Flex__<typeof TextInput>;
  textInput5?: Flex__<typeof TextInput>;
  checkbox?: Flex__<typeof Checkbox>;
  checkbox2?: Flex__<typeof Checkbox>;
  checkbox3?: Flex__<typeof Checkbox>;
  checkbox4?: Flex__<typeof Checkbox>;
  textInput2?: Flex__<typeof TextInput>;
  textInput4?: Flex__<typeof TextInput>;
  textInput3?: Flex__<typeof TextInput>;
  divider?: Flex__<typeof Divider>;
};

export interface DefaultSignUpPromptProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSignUpPrompt__RenderFunc(props: {
  variants: PlasmicSignUpPrompt__VariantsArgs;
  args: PlasmicSignUpPrompt__ArgsType;
  overrides: PlasmicSignUpPrompt__OverridesType;
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
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "textInput2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "textInput3.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "complete",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "no"
      },
      {
        path: "textInput4.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "checkbox.isChecked",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "checkbox2.isChecked",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "checkbox3.isChecked",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "checkbox4.isChecked",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "textInput5.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "publish",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "goals",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => []
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
      <div className={classNames(projectcss.all, sty.freeBox__fwwEy)}>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__drAt4)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__pXuzN
            )}
          >
            {"Sign up with"}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__kGtkW)}>
            <Button
              className={classNames("__wab_instance", sty.button___1FAl)}
              onClick={async event => {
                const $steps = {};

                $steps["updateTextInputValue"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: {
                          objRoot: $state,
                          variablePath: ["textInput", "value"]
                        },
                        operation: 0
                      };
                      return (({
                        variable,
                        value,
                        startIndex,
                        deleteCount
                      }) => {
                        if (!variable) {
                          return;
                        }
                        const { objRoot, variablePath } = variable;

                        $stateSet(objRoot, variablePath, value);
                        return value;
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["updateTextInputValue"] != null &&
                  typeof $steps["updateTextInputValue"] === "object" &&
                  typeof $steps["updateTextInputValue"].then === "function"
                ) {
                  $steps["updateTextInputValue"] = await $steps[
                    "updateTextInputValue"
                  ];
                }
              }}
              outline={true}
              showStartIcon={true}
              submitsForm={true}
            >
              {"YouTube"}
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__iuWuz)}
              onClick={async event => {
                const $steps = {};

                $steps["runCode"] = true
                  ? (() => {
                      const actionArgs = {
                        customFunction: async () => {
                          return undefined;
                        }
                      };
                      return (({ customFunction }) => {
                        return customFunction();
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["runCode"] != null &&
                  typeof $steps["runCode"] === "object" &&
                  typeof $steps["runCode"].then === "function"
                ) {
                  $steps["runCode"] = await $steps["runCode"];
                }
              }}
              outline={true}
              showStartIcon={true}
              submitsForm={true}
            >
              {"CMS"}
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__x8E1I)}
              outline={true}
              showStartIcon={true}
              startIcon={
                <GoogleIcon
                  className={classNames(projectcss.all, sty.svg__yitGh)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              {"News"}
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__oQo9V)}
              outline={true}
              showStartIcon={true}
              startIcon={
                <GoogleIcon
                  className={classNames(projectcss.all, sty.svg__ptsEs)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              {"News"}
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__xEtl7)}
              outline={true}
              showStartIcon={true}
              startIcon={
                <GoogleIcon
                  className={classNames(projectcss.all, sty.svg__sgeL6)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              {"News"}
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__bzrCt)}
              outline={true}
              showStartIcon={true}
              startIcon={
                <GoogleIcon
                  className={classNames(projectcss.all, sty.svg__hlJdn)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              {"News"}
            </Button>
          </div>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__c9YHs)}
          >
            <TextInput
              data-plasmic-name={"textInput"}
              data-plasmic-override={overrides.textInput}
              className={classNames("__wab_instance", sty.textInput)}
              onChange={async (...eventArgs: any) => {
                ((...eventArgs) => {
                  generateStateOnChangeProp($state, ["textInput", "value"])(
                    (e => e.target?.value).apply(null, eventArgs)
                  );
                }).apply(null, eventArgs);
                (async event => {
                  const $steps = {};

                  $steps["updateTextInputValue"] = true
                    ? (() => {
                        const actionArgs = {
                          variable: {
                            objRoot: $state,
                            variablePath: ["textInput", "value"]
                          },
                          operation: 0
                        };
                        return (({
                          variable,
                          value,
                          startIndex,
                          deleteCount
                        }) => {
                          if (!variable) {
                            return;
                          }
                          const { objRoot, variablePath } = variable;

                          $stateSet(objRoot, variablePath, value);
                          return value;
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["updateTextInputValue"] != null &&
                    typeof $steps["updateTextInputValue"] === "object" &&
                    typeof $steps["updateTextInputValue"].then === "function"
                  ) {
                    $steps["updateTextInputValue"] = await $steps[
                      "updateTextInputValue"
                    ];
                  }
                }).apply(null, eventArgs);
              }}
              placeholder={"Full Name"}
              showStartIcon={true}
              value={
                generateStateValueProp($state, ["textInput", "value"]) ?? ""
              }
            />

            <TextInput
              data-plasmic-name={"textInput5"}
              data-plasmic-override={overrides.textInput5}
              className={classNames("__wab_instance", sty.textInput5)}
              onChange={(...eventArgs) => {
                generateStateOnChangeProp($state, ["textInput5", "value"])(
                  (e => e.target?.value).apply(null, eventArgs)
                );
              }}
              showStartIcon={true}
              value={
                generateStateValueProp($state, ["textInput5", "value"]) ?? ""
              }
            />

            <Checkbox
              data-plasmic-name={"checkbox"}
              data-plasmic-override={overrides.checkbox}
              className={classNames("__wab_instance", sty.checkbox)}
              isChecked={
                generateStateValueProp($state, ["checkbox", "isChecked"]) ??
                false
              }
              onChange={(...eventArgs) => {
                generateStateOnChangeProp($state, ["checkbox", "isChecked"])(
                  eventArgs[0]
                );
              }}
            />

            <Checkbox
              data-plasmic-name={"checkbox2"}
              data-plasmic-override={overrides.checkbox2}
              className={classNames("__wab_instance", sty.checkbox2)}
              isChecked={
                generateStateValueProp($state, ["checkbox2", "isChecked"]) ??
                false
              }
              onChange={(...eventArgs) => {
                generateStateOnChangeProp($state, ["checkbox2", "isChecked"])(
                  eventArgs[0]
                );
              }}
            />

            <Checkbox
              data-plasmic-name={"checkbox3"}
              data-plasmic-override={overrides.checkbox3}
              className={classNames("__wab_instance", sty.checkbox3)}
              isChecked={
                generateStateValueProp($state, ["checkbox3", "isChecked"]) ??
                false
              }
              onChange={(...eventArgs) => {
                generateStateOnChangeProp($state, ["checkbox3", "isChecked"])(
                  eventArgs[0]
                );
              }}
            />

            <Checkbox
              data-plasmic-name={"checkbox4"}
              data-plasmic-override={overrides.checkbox4}
              className={classNames("__wab_instance", sty.checkbox4)}
              isChecked={
                generateStateValueProp($state, ["checkbox4", "isChecked"]) ??
                false
              }
              onChange={(...eventArgs) => {
                generateStateOnChangeProp($state, ["checkbox4", "isChecked"])(
                  eventArgs[0]
                );
              }}
            />

            <TextInput
              data-plasmic-name={"textInput2"}
              data-plasmic-override={overrides.textInput2}
              className={classNames("__wab_instance", sty.textInput2)}
              onChange={(...eventArgs) => {
                generateStateOnChangeProp($state, ["textInput2", "value"])(
                  (e => e.target?.value).apply(null, eventArgs)
                );
              }}
              placeholder={"Email"}
              value={
                generateStateValueProp($state, ["textInput2", "value"]) ?? ""
              }
            />

            <TextInput
              data-plasmic-name={"textInput4"}
              data-plasmic-override={overrides.textInput4}
              className={classNames("__wab_instance", sty.textInput4)}
              onChange={(...eventArgs) => {
                generateStateOnChangeProp($state, ["textInput4", "value"])(
                  (e => e.target?.value).apply(null, eventArgs)
                );
              }}
              placeholder={"Phone"}
              type={"tel"}
              value={
                generateStateValueProp($state, ["textInput4", "value"]) ?? ""
              }
            />

            <TextInput
              data-plasmic-name={"textInput3"}
              data-plasmic-override={overrides.textInput3}
              className={classNames("__wab_instance", sty.textInput3)}
              onChange={(...eventArgs) => {
                generateStateOnChangeProp($state, ["textInput3", "value"])(
                  (e => e.target?.value).apply(null, eventArgs)
                );
              }}
              placeholder={"Password"}
              value={
                generateStateValueProp($state, ["textInput3", "value"]) ?? ""
              }
            />
          </Stack__>
          <Button
            className={classNames("__wab_instance", sty.button__gn5H)}
            color2={"blue"}
            endIcon={
              <WandIcon
                className={classNames(projectcss.all, sty.svg__vtQxy)}
                role={"img"}
              />
            }
            onClick={async event => {
              const $steps = {};

              $steps["updateTextInputValue"] = true
                ? (() => {
                    const actionArgs = {
                      variable: {
                        objRoot: $state,
                        variablePath: ["textInput", "value"]
                      },
                      operation: 0
                    };
                    return (({ variable, value, startIndex, deleteCount }) => {
                      if (!variable) {
                        return;
                      }
                      const { objRoot, variablePath } = variable;

                      $stateSet(objRoot, variablePath, value);
                      return value;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateTextInputValue"] != null &&
                typeof $steps["updateTextInputValue"] === "object" &&
                typeof $steps["updateTextInputValue"].then === "function"
              ) {
                $steps["updateTextInputValue"] = await $steps[
                  "updateTextInputValue"
                ];
              }

              $steps["updateTextInputValue2"] = true
                ? (() => {
                    const actionArgs = {
                      variable: {
                        objRoot: $state,
                        variablePath: ["textInput", "value"]
                      },
                      operation: 0
                    };
                    return (({ variable, value, startIndex, deleteCount }) => {
                      if (!variable) {
                        return;
                      }
                      const { objRoot, variablePath } = variable;

                      $stateSet(objRoot, variablePath, value);
                      return value;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateTextInputValue2"] != null &&
                typeof $steps["updateTextInputValue2"] === "object" &&
                typeof $steps["updateTextInputValue2"].then === "function"
              ) {
                $steps["updateTextInputValue2"] = await $steps[
                  "updateTextInputValue2"
                ];
              }
            }}
            submitsForm={true}
          >
            {"Start your account"}
          </Button>
        </Stack__>
        <Divider
          data-plasmic-name={"divider"}
          data-plasmic-override={overrides.divider}
          className={classNames("__wab_instance", sty.divider)}
        />

        <div className={classNames(projectcss.all, sty.freeBox__gviUh)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___5Oi5H
            )}
          >
            {
              "A cras sagittis odio vestibulum pulvinar a eget hendrerit id vestibulum a leo sociosqu dictumst dictumst natoque magnis parturient."
            }
          </div>
        </div>
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "textInput",
    "textInput5",
    "checkbox",
    "checkbox2",
    "checkbox3",
    "checkbox4",
    "textInput2",
    "textInput4",
    "textInput3",
    "divider"
  ],

  textInput: ["textInput"],
  textInput5: ["textInput5"],
  checkbox: ["checkbox"],
  checkbox2: ["checkbox2"],
  checkbox3: ["checkbox3"],
  checkbox4: ["checkbox4"],
  textInput2: ["textInput2"],
  textInput4: ["textInput4"],
  textInput3: ["textInput3"],
  divider: ["divider"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  textInput: typeof TextInput;
  textInput5: typeof TextInput;
  checkbox: typeof Checkbox;
  checkbox2: typeof Checkbox;
  checkbox3: typeof Checkbox;
  checkbox4: typeof Checkbox;
  textInput2: typeof TextInput;
  textInput4: typeof TextInput;
  textInput3: typeof TextInput;
  divider: typeof Divider;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSignUpPrompt__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSignUpPrompt__VariantsArgs;
    args?: PlasmicSignUpPrompt__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSignUpPrompt__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSignUpPrompt__ArgsType,
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
          internalArgPropNames: PlasmicSignUpPrompt__ArgProps,
          internalVariantPropNames: PlasmicSignUpPrompt__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSignUpPrompt__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSignUpPrompt";
  } else {
    func.displayName = `PlasmicSignUpPrompt.${nodeName}`;
  }
  return func;
}

export const PlasmicSignUpPrompt = Object.assign(
  // Top-level PlasmicSignUpPrompt renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textInput: makeNodeComponent("textInput"),
    textInput5: makeNodeComponent("textInput5"),
    checkbox: makeNodeComponent("checkbox"),
    checkbox2: makeNodeComponent("checkbox2"),
    checkbox3: makeNodeComponent("checkbox3"),
    checkbox4: makeNodeComponent("checkbox4"),
    textInput2: makeNodeComponent("textInput2"),
    textInput4: makeNodeComponent("textInput4"),
    textInput3: makeNodeComponent("textInput3"),
    divider: makeNodeComponent("divider"),

    // Metadata about props expected for PlasmicSignUpPrompt
    internalVariantProps: PlasmicSignUpPrompt__VariantProps,
    internalArgProps: PlasmicSignUpPrompt__ArgProps
  }
);

export default PlasmicSignUpPrompt;
/* prettier-ignore-end */
