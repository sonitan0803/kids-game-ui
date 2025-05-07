import { action } from "@storybook/addon-actions";

import { OpeningTitle } from "../../../packages/components/opening"; // 正しいパスに変更

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof OpeningTitle>;

const meta: Meta<typeof OpeningTitle> = {
    component: OpeningTitle,
    title: "Components / Opening / OpeningTitle",
};

export default meta;

const handleClickStart = action("handleClickStart");
const handleClickContinue = action("handleClickContinue");
const handleClickOption = action("handleClickOption");

export const Default: Story = {
    args: { children: "aaa" },
};
