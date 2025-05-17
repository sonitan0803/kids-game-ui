import { action } from "@storybook/addon-actions"

import { SelectArrowButtonLists } from "../../../packages/components/button" // 正しいパスに変更

import type { Meta, StoryObj } from "@storybook/react"

type Story = StoryObj<typeof SelectArrowButtonLists>

const meta: Meta<typeof SelectArrowButtonLists> = {
    component: SelectArrowButtonLists,
    title: "Components / Button/ SelectArrowButtonLists",
}

export default meta

export const Default: Story = {
    args: {
        lists: [
            {
                label: "Button 1",
                onClick: action("Button 1 clicked"),
                width: "200px",
                height: "100px",
            },
            {
                label: "Button 2",
                onClick: action("Button 2 clicked"),
                width: "200px",
                height: "100px",
            },
            {
                label: "Button 3",
                onClick: action("Button 3 clicked"),
                width: "200px",
                height: "100px",
            },
        ],
    },
}

export const RowDefault: Story = {
    args: {
        direction: "row",
        lists: [
            {
                label: "Button 1",
                onClick: action("Button 1 clicked"),
                width: "200px",
                height: "100px",
            },
            {
                label: "Button 2",
                onClick: action("Button 2 clicked"),
                width: "200px",
                height: "100px",
            },
            {
                label: "Button 3",
                onClick: action("Button 3 clicked"),
                width: "200px",
                height: "100px",
            },
        ],
    },
}
export const GapSmall: Story = {
    args: {
        direction: "column",
        gap: "8px",
        lists: [
            {
                label: "Button Small Gap 1",
                onClick: action("Small Gap 1 clicked"),
                width: "200px",
                height: "100px",
            },
            {
                label: "Button Small Gap 2",
                onClick: action("Small Gap 2 clicked"),
                width: "200px",
                height: "100px",
            },
        ],
    },
}

export const GapLarge: Story = {
    args: {
        direction: "column",
        gap: "32px",
        lists: [
            {
                label: "Button Large Gap 1",
                onClick: action("Large Gap 1 clicked"),
                width: "200px",
                height: "100px",
            },
            {
                label: "Button Large Gap 2",
                onClick: action("Large Gap 2 clicked"),
                width: "200px",
                height: "100px",
            },
        ],
    },
}

export const CustomColors: Story = {
    args: {
        direction: "row",
        gap: "16px",
        lists: [
            {
                label: "Red Button",
                onClick: action("Red Button clicked"),
                width: "200px",
                height: "100px",
                buttonColor: "#ffcccc",
                fontColor: "#990000",
                border: "2px solid #990000",
                hoverColor: "#ff9999",
                activeColor: "#cc6666",
            },
            {
                label: "Green Button",
                onClick: action("Green Button clicked"),
                width: "200px",
                height: "100px",
                buttonColor: "#ccffcc",
                fontColor: "#006600",
                border: "2px solid #006600",
                hoverColor: "#99ff99",
                activeColor: "#66cc66",
            },
        ],
    },
}

export const MixedSizeRow: Story = {
    args: {
        direction: "row",
        gap: "20px",
        lists: [
            {
                label: "Big Button",
                onClick: action("Big Button clicked"),
                width: "250px",
                height: "120px",
            },
            {
                label: "Small Button",
                onClick: action("Small Button clicked"),
                width: "150px",
                height: "80px",
            },
        ],
    },
}
