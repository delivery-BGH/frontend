import { Meta, StoryObj } from "@storybook/react";

import BarraDeMedicao, { BarraDeMedicaoProps } from "./BarraDeMedicao";

const meta: Meta<BarraDeMedicaoProps> = {
  title: "Molecule/BarraDeMedicao",
  component: BarraDeMedicao,
  argTypes: {
    length: {
      type: "number",
    },
  },
};

export default meta;

export const Default: StoryObj<BarraDeMedicaoProps> = {
  args: {
    children: "Botão",
    length: 0,
  },
};
