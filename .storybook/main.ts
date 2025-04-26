import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"; // ✅

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
            plugins: [vanillaExtractPlugin()],
            css: {
                modules: false, // 🔥 CSS Modules 無効化
            },
        });
    },
};

export default config;
