
import { Meta, StoryObj } from "@storybook/react";
import Checkbox, { CheckBoxProps } from "./Checkbox";

const meta: Meta<CheckBoxProps> = {
  title: 'Molecule/Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: {
      type: "boolean",
    },
    checked: {
      type: "boolean",
    }
  }
};

export default meta;

export const Padrao: StoryObj<CheckBoxProps> = {
  args: {

  }
}

export const Checked: StoryObj<CheckBoxProps> = {
  args: {
    checked: true,
    disabled: false
  }
}

export const UnCheckedDisabled: StoryObj<CheckBoxProps> = {
  args: {
    checked: false,
    disabled: true
  }
}

export const CheckedDisabled: StoryObj<CheckBoxProps> = {
  args: {
    checked: true,
    disabled: true
  }
}


