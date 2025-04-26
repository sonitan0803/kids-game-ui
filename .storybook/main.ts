import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

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
                modules: false, // 🔥 CSS Modules 無効化
            },
        });
    },
};

export default config;
