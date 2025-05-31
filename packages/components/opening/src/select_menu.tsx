import React from "react"
import type { CSSProperties } from "react"

import { css } from "@emotion/react"
import { SelectArrowButtonLists } from "@kids-game-ui/button"

import type { SelectArrowButtonProps } from "@kids-game-ui/button"

const containerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #000000;
    background-color: #ffffff;
    width: var(--menu-width);
    height: var(--menu-height);
`

/**
 * SelectMenu コンポーネントは、はじめる／つづきから／オプション の3つの縦並びボタンを表示するメニューです。
 *
 * 各ボタンに対してコールバック関数を渡すことで、クリック時の動作を制御できます。
 *
 * ホバー中は該当ボタンの右側に矢印「←」が表示され、選択中であることを視覚的に示します。
 */
export type SelectMenuProps = {
    /** コンポーネント全体の高さ（例: `"300px"`） */
    height?: CSSProperties["height"]
    /** コンポーネント全体の幅（例: `"200px"`） */
    width?: CSSProperties["width"]
    /** ボタンの背景色 */
    buttonColor?: CSSProperties["color"]
    /** 文字の色 */
    fontColor?: CSSProperties["color"]
    /** 文字のサイズ */
    fontSize?: CSSProperties["fontSize"]
    /** 「はじめる」ボタンのクリック時に呼ばれるコールバック関数 */
    handleClickStart: () => void
    /** 「つづきから」ボタンのクリック時に呼ばれるコールバック関数 */
    handleClickContinue: () => void
    /** 「オプション」ボタンのクリック時に呼ばれるコールバック関数 */
    handleClickOption: () => void
}

export const SelectMenu: React.FC<SelectMenuProps> = ({
    height = "150px",
    width = "150px",
    buttonColor = "transparent",
    fontColor = "black",
    fontSize = "16px",
    handleClickStart,
    handleClickContinue,
    handleClickOption,
}) => {
    const buttonList: SelectArrowButtonProps[] = [
        {
            label: "はじめる",
            width: "100%",
            onClick: handleClickStart,
            buttonColor: buttonColor,
            fontColor: fontColor,
            fontSize: fontSize,
        },
        {
            label: "つづきから",
            width: "100%",
            onClick: handleClickContinue,
            buttonColor: buttonColor,
            fontColor: fontColor,
            fontSize: fontSize,
        },
        {
            label: "オプション",
            width: "100%",
            onClick: handleClickOption,
            buttonColor: buttonColor,
            fontColor: fontColor,
            fontSize: fontSize,
        },
    ]

    return (
        <div
            css={containerStyle}
            style={
                {
                    "--menu-height": height,
                    "--menu-width": width,
                } as React.CSSProperties
            }
        >
            <SelectArrowButtonLists lists={buttonList} direction="column" />
        </div>
    )
}
