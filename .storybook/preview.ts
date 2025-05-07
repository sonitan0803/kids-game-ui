import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import type { Preview } from "@storybook/react";

const customViewports = {
    fullHD: {
        name: "fullhd",
        styles: {
            width: "1920px",
            height: "1080px",
        },
        type: "fullhd",
    },
    m2Mac: {
        name: "m2mac",
        styles: {
            width: "1680px",
            height: "1050px",
        },
        type: "m2mac",
    },
};

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        viewport: {
            viewports: {
                ...INITIAL_VIEWPORTS,
                ...customViewports,
            },
        },
    },
};

export default preview;
