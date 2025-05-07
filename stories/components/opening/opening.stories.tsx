import { action } from "@storybook/addon-actions";

import { SelectMenu } from "../../../packages/components/opening"; // 正しいパスに変更

import type { Meta, StoryObj } from "@storybook/react";

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

/**
 * 文字サイス
 */
export const FontSize: Story = {
    args: {
        fontSize: "20px",
        handleClickStart: handleClickStart,
        handleClickContinue: handleClickContinue,
        handleClickOption: handleClickOption,
    },
};

/**
 * 文字色の確認
 */
export const FontColor: Story = {
    args: {
        fontColor: "red",
        handleClickStart: handleClickStart,
        handleClickContinue: handleClickContinue,
        handleClickOption: handleClickOption,
    },
};

/**
 * 背景色の確認
 */
export const ButtonColor: Story = {
    args: {
        buttonColor: "rgba(124, 255, 84, 0.918)",
        handleClickStart: handleClickStart,
        handleClickContinue: handleClickContinue,
        handleClickOption: handleClickOption,
    },
};
