
import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: 'Molecule/Button',
  component: Button,
  argTypes: {
    children: {
      type: "string",
    },
    disabled: {
      type: "boolean",
    },
    className: {
      type: "string"
    },
  }
};

export default meta;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: "Botão"
  }
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: "Botão",
    variant: "secondary",
  }
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão',
    variant: 'tertiary'
  }
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    children: "Botão",
    disabled: true
  }
}

