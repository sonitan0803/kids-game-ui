import { mergeConfig } from "vite";

import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: ["../stories/**/*.@(mdx|stories.@(tsx))"],
    addons: ["@storybook/addon-essentials", "@storybook/addon-docs"],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    docs: {
        autodocs: true,
    },
    viteFinal: async (config, { configType }) => {
        return mergeConfig(config, {
            css: {
                modules: false,
            },
        });
    },
};

export default config;
