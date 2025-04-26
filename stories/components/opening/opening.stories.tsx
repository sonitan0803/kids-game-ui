import type { Meta, StoryObj } from "@storybook/react";
import { SelectMenu } from "../../../packages/components/opening"; // 正しいパスに変更
import { action } from "@storybook/addon-actions";

type Story = StoryObj<typeof SelectMenu>;

const meta: Meta<typeof SelectMenu> = {
    component: SelectMenu,
    title: "Components / Opening / SelectMenu",
};

export default meta;

const handleClickStart = action("handleClickStart");
const handleClickContinue = action("handleClickContinue");
const handleClickOption = action("handleClickOption");

export const Default: Story = {
    args: {
        handleClickStart: handleClickStart,
        handleClickContinue: handleClickContinue,
        handleClickOption: handleClickOption,
    },
};

/**
 * サイズを変えても動くか
 */
export const SizeConfirm: Story = {
    args: {
        height: "50%",
        width: "50%",
        handleClickStart: handleClickStart,
        handleClickContinue: handleClickContinue,
        handleClickOption: handleClickOption,
    },
};
