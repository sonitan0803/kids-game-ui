import { action } from "@storybook/addon-actions"

import { YesNoPopup } from "../../../packages/components/popup" // 正しいパスに変更

import type { Meta, StoryObj } from "@storybook/react"

type Story = StoryObj<typeof YesNoPopup>

const meta: Meta<typeof YesNoPopup> = {
    component: YesNoPopup,
    title: "Components / Popup / YesNoPopup",
}

export default meta

export const Default: Story = {
    args: {
        handleClickYes: action("handleClickYes"),
        handleClickNo: action("handleClickNo"),
    },
}

export const MinDefault: Story = {
    args: {
        height: "10px",
        width: "10px",
        handleClickYes: action("handleClickYes"),
        handleClickNo: action("handleClickNo"),
    },
}

export const Big: Story = {
    args: {
        height: "1000px",
        width: "1000px",
        handleClickYes: action("handleClickYes"),
        handleClickNo: action("handleClickNo"),
    },
}

export const Border: Story = {
    args: {
        border: "4mm ridge rgb(255, 0, 0)",
        handleClickYes: action("handleClickYes"),
        handleClickNo: action("handleClickNo"),
    },
}
