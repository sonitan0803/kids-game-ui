import type { Meta, StoryObj } from "@storybook/react";
import { SelectMenu } from "../../../packages/components/opening"; // 正しいパスに変更

type Story = StoryObj<typeof SelectMenu>;

const meta: Meta<typeof SelectMenu> = {
    component: SelectMenu,
    title: "Components / Opening / SelectMenu",
};

export default meta;

export const Default: Story = {
    args: {
        label: "Click Me",
    },
};
