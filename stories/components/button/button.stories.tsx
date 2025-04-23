import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../../packages/components/button"; // 正しいパスに変更

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
    component: Button,
    title: "Components / Data Display / Badge",
};

export default meta;

export const Default: Story = {
    args: {
        label: "Click Me",
    },
};
