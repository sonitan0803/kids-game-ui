import { action } from "@storybook/addon-actions";

import { CharacterLine } from "../../../../packages/components/message"; // 正しいパスに変更

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof CharacterLine>;

const meta: Meta<typeof CharacterLine> = {
    component: CharacterLine,
    title: "Components / Message / CharacterLine",
};

export default meta;

const handleMessageClick = action("Click handleMessageClick");

export const Default: Story = {
    args: {
        characterName: "神山",
        children: `背景オフクロ様\nこのメッセージはテストになります。`,
        handleMessageClick: handleMessageClick,
    },
};

export const ImageEnable: Story = {
    args: {
        characterName: "神山",
        children: `背景オフクロ様\nこのメッセージはテストになります。`,
        characterImage:
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi94bUmrX7_QbkuO10pft4UVWiRRuF0oKpy1hsBQa0sTYVPyqb4MHLPsSPF9jqElIIUd6GQG2pXIEInAH4NRDxOC_doNl5erI6NaE5U37xMyw3KqcJsBSxTrSAo_4WA1Fs4l4viwmQWK6Qi/s800/computer_school_boy.png",
        handleMessageClick: handleMessageClick,
    },
};

export const Responsive: Story = {
    args: {
        characterName: "神山",
        children: `背景オフクロ様\nこのメッセージはテストになります。`,
        height: "50px",
        width: "50%",
    },
};

export const ResponsiveImageEnable: Story = {
    args: {
        characterName: "神山",
        children: `背景オフクロ様\nこのメッセージはテストになります。`,
        characterImage:
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi94bUmrX7_QbkuO10pft4UVWiRRuF0oKpy1hsBQa0sTYVPyqb4MHLPsSPF9jqElIIUd6GQG2pXIEInAH4NRDxOC_doNl5erI6NaE5U37xMyw3KqcJsBSxTrSAo_4WA1Fs4l4viwmQWK6Qi/s800/computer_school_boy.png",
        handleMessageClick: handleMessageClick,
        height: "50px",
        width: "50%",
    },
};

export const LineBreak: Story = {
    args: {
        characterName: "神山",
        children: `背景オフクロ様\nこのメッセージはテストになります。\nそれはひょっとしてギャグで行っているのか`,
        handleMessageClick: handleMessageClick,
    },
};

export const LineBreakImageEnable: Story = {
    args: {
        characterName: "神山",
        children: `背景オフクロ様\nこのメッセージはテストになります。\nそれはひょっとしてギャグで行っているのか`,
        characterImage:
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi94bUmrX7_QbkuO10pft4UVWiRRuF0oKpy1hsBQa0sTYVPyqb4MHLPsSPF9jqElIIUd6GQG2pXIEInAH4NRDxOC_doNl5erI6NaE5U37xMyw3KqcJsBSxTrSAo_4WA1Fs4l4viwmQWK6Qi/s800/computer_school_boy.png",
        handleMessageClick: handleMessageClick,
    },
};

export const TextOver: Story = {
    args: {
        characterName: "神山",
        children: `背景オフクロ様\nあああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ`,
        handleMessageClick: handleMessageClick,
    },
};

export const TextOverImageEnable: Story = {
    args: {
        characterName: "神山",
        children: `背景オフクロ様\nあああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ`,
        characterImage:
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi94bUmrX7_QbkuO10pft4UVWiRRuF0oKpy1hsBQa0sTYVPyqb4MHLPsSPF9jqElIIUd6GQG2pXIEInAH4NRDxOC_doNl5erI6NaE5U37xMyw3KqcJsBSxTrSAo_4WA1Fs4l4viwmQWK6Qi/s800/computer_school_boy.png",
        handleMessageClick: handleMessageClick,
    },
};

export const TextSize: Story = {
    args: {
        characterName: "神山",
        children: `背景オフクロ様\nこれはテストです。`,
        handleMessageClick: handleMessageClick,
        characterNameText: "21px",
        characterLineText: "20px",
    },
};

export const TextSizeImageEnable: Story = {
    args: {
        characterName: "神山",
        children: `背景オフクロ様\nこれはテストです。`,
        characterImage:
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi94bUmrX7_QbkuO10pft4UVWiRRuF0oKpy1hsBQa0sTYVPyqb4MHLPsSPF9jqElIIUd6GQG2pXIEInAH4NRDxOC_doNl5erI6NaE5U37xMyw3KqcJsBSxTrSAo_4WA1Fs4l4viwmQWK6Qi/s800/computer_school_boy.png",
        handleMessageClick: handleMessageClick,
        characterNameText: "21px",
        characterLineText: "20px",
    },
};

export const ButtonSize: Story = {
    args: {
        characterName: "神山",
        children: `背景オフクロ様\nこれはテストです。`,
        handleMessageClick: handleMessageClick,
        buttonSize: "30px",
    },
};

export const ButtonSizeImageEnable: Story = {
    args: {
        characterName: "神山",
        children: `背景オフクロ様\nこれはテストです。`,
        characterImage:
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi94bUmrX7_QbkuO10pft4UVWiRRuF0oKpy1hsBQa0sTYVPyqb4MHLPsSPF9jqElIIUd6GQG2pXIEInAH4NRDxOC_doNl5erI6NaE5U37xMyw3KqcJsBSxTrSAo_4WA1Fs4l4viwmQWK6Qi/s800/computer_school_boy.png",
        handleMessageClick: handleMessageClick,
        buttonSize: "30px",
    },
};
