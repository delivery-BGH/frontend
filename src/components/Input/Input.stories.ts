import { Meta, StoryObj } from "@storybook/react";
import Input, { InputProps } from "./Input";

const meta: Meta<InputProps> = {
  title: "Molecule/Input",
  component: Input,
  argTypes: {
    label: { type: "string" },
    multiline: { type: "boolean" },
    placeholder: { type: "string" },
    disabled: { type: "boolean" },
    className: { type: "string" },
  },
};

export default meta;

export const Primary: StoryObj<InputProps> = {
  args: {
    value: "Input",
  },
};
export const PrimaryLabel: StoryObj<InputProps> = {
  args: {
    value: "Input",
    label: "Label",
  },
};
export const PrimaryDisabled: StoryObj<InputProps> = {
  args: {
    value: "Input",
    disabled: true,
  },
};
export const PrimaryLabelDisabled: StoryObj<InputProps> = {
  args: {
    value: "Input",
    label: "Label",
    disabled: true,
  },
};

export const Multiline: StoryObj<InputProps> = {
  args: {
    value: "TextArea",
    multiline: true,
  },
};
export const MultilineLabel: StoryObj<InputProps> = {
  args: {
    value: "TextArea",
    multiline: true,
    label: "Label",
  },
};
export const MultilineDisabled: StoryObj<InputProps> = {
  args: {
    value: "TextArea",
    disabled: true,
    multiline: true,
  },
};
export const MultilineLabelDisabled: StoryObj<InputProps> = {
  args: {
    value: "TextArea",
    label: "Label",
    disabled: true,
    multiline: true,
  },
};
