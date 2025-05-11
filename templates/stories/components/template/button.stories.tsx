import { Templates } from "../../../packages/components/templates" // 正しいパスに変更

import type { Meta, StoryObj } from "@storybook/react"

type Story = StoryObj<typeof Templates>

const meta: Meta<typeof Templates> = {
    component: Templates,
    title: "Components / Templates",
}

export default meta

export const Default: Story = {
    args: {
        label: "Click Me",
    },
}
