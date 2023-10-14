
import { Meta, StoryObj } from "@storybook/react";
import Switch, { SwitchProps } from "./Switch";

const meta: Meta<SwitchProps> = {
  title: 'Molecule/Switch',
  component: Switch,
  argTypes: {
    defaultEnable: {
      type: 'boolean',
    },
    disabled: {
      type: "boolean",
    },
    check: {
      type: 'boolean'
    }
  }
};

export default meta;

export const Padrao: StoryObj<SwitchProps> = {
  args: {
    defaultEnable: true,
    check: false
  }
}

export const Desativado: StoryObj<SwitchProps> = {
  args: {
    disabled: true,
    check: false
  }
}

export const DesativadoMarcado: StoryObj<SwitchProps> = {
  args: {
    disabled: true,
    defaultEnable: true
  }
}