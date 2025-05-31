import { SelectArrowButton } from "../../../packages/components/button" // 正しいパスに変更

import type { Meta, StoryObj } from "@storybook/react"

type Story = StoryObj<typeof SelectArrowButton>

const meta: Meta<typeof SelectArrowButton> = {
    component: SelectArrowButton,
    title: "Components / Button/ SelectArrowButton",
}

export default meta

export const Default: Story = {
    args: {
        label: "Click Me",
    },
}

export const Color: Story = {
    args: {
        label: "Click Me",
        buttonColor: "red",
        fontColor: "green",
        border: "2px solid blue",
        hoverColor: "yellow",
        activeColor: "pink",
    },
}

/** 文字サイズ自動 */
export const Size: Story = {
    args: {
        label: "Click Me",
        width: "200px",
        height: "200px",
    },
}

/** 文字サイズ固定 */
export const Size2: Story = {
    args: {
        label: "Click Me",
        width: "200px",
        height: "200px",
        fontSize: "20px",
    },
}
