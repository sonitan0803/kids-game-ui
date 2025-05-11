import {
    CharacterBattleStatus,
    type CharacterData,
} from "../../../../packages/components/characters" // 正しいパスに変更

import type { Meta, StoryObj } from "@storybook/react"

type Story = StoryObj<typeof CharacterBattleStatus>

const meta: Meta<typeof CharacterBattleStatus> = {
    component: CharacterBattleStatus,
    title: "Components / Characters / CharacterBattleStatus",
}

export default meta

export const Default: Story = {
    args: {
        characterData: {
            name: "かみやま",
            totalHp: 1000,
            currentHp: 1000,
            totalMp: 500,
            currentMp: 500,
            characterImage:
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi94bUmrX7_QbkuO10pft4UVWiRRuF0oKpy1hsBQa0sTYVPyqb4MHLPsSPF9jqElIIUd6GQG2pXIEInAH4NRDxOC_doNl5erI6NaE5U37xMyw3KqcJsBSxTrSAo_4WA1Fs4l4viwmQWK6Qi/s800/computer_school_boy.png",
        },
    },
}

export const MinDefault: Story = {
    args: {
        width: "10px",
        height: "10px",
        characterData: {
            name: "かみやま",
            totalHp: 1000,
            currentHp: 1000,
            totalMp: 500,
            currentMp: 500,
            characterImage:
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi94bUmrX7_QbkuO10pft4UVWiRRuF0oKpy1hsBQa0sTYVPyqb4MHLPsSPF9jqElIIUd6GQG2pXIEInAH4NRDxOC_doNl5erI6NaE5U37xMyw3KqcJsBSxTrSAo_4WA1Fs4l4viwmQWK6Qi/s800/computer_school_boy.png",
        },
    },
}

export const Big: Story = {
    args: {
        width: "1000px",
        height: "1500px",
        characterData: {
            name: "かみやま",
            totalHp: 1000,
            currentHp: 1000,
            totalMp: 500,
            currentMp: 500,
            characterImage:
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi94bUmrX7_QbkuO10pft4UVWiRRuF0oKpy1hsBQa0sTYVPyqb4MHLPsSPF9jqElIIUd6GQG2pXIEInAH4NRDxOC_doNl5erI6NaE5U37xMyw3KqcJsBSxTrSAo_4WA1Fs4l4viwmQWK6Qi/s800/computer_school_boy.png",
        },
    },
}

export const DefaultGainStatus: Story = {
    args: {
        characterData: {
            name: "かみやま",
            totalHp: 1000,
            currentHp: 500,
            totalMp: 500,
            currentMp: 100,
            characterImage:
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi94bUmrX7_QbkuO10pft4UVWiRRuF0oKpy1hsBQa0sTYVPyqb4MHLPsSPF9jqElIIUd6GQG2pXIEInAH4NRDxOC_doNl5erI6NaE5U37xMyw3KqcJsBSxTrSAo_4WA1Fs4l4viwmQWK6Qi/s800/computer_school_boy.png",
        },
    },
}

export const MinGainStatusDefault: Story = {
    args: {
        width: "10px",
        height: "10px",
        characterData: {
            name: "かみやま",
            totalHp: 1000,
            currentHp: 500,
            totalMp: 500,
            currentMp: 100,
            characterImage:
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi94bUmrX7_QbkuO10pft4UVWiRRuF0oKpy1hsBQa0sTYVPyqb4MHLPsSPF9jqElIIUd6GQG2pXIEInAH4NRDxOC_doNl5erI6NaE5U37xMyw3KqcJsBSxTrSAo_4WA1Fs4l4viwmQWK6Qi/s800/computer_school_boy.png",
        },
    },
}

export const BigGainStatus: Story = {
    args: {
        width: "1000px",
        height: "1500px",
        characterData: {
            name: "かみやま",
            totalHp: 1000,
            currentHp: 500,
            totalMp: 500,
            currentMp: 100,
            characterImage:
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi94bUmrX7_QbkuO10pft4UVWiRRuF0oKpy1hsBQa0sTYVPyqb4MHLPsSPF9jqElIIUd6GQG2pXIEInAH4NRDxOC_doNl5erI6NaE5U37xMyw3KqcJsBSxTrSAo_4WA1Fs4l4viwmQWK6Qi/s800/computer_school_boy.png",
        },
    },
}
