import React from "react"
import type { CSSProperties } from "react"

import { css } from "@emotion/react"
import { SelectArrowButtonLists } from "@kids-game-ui/button"
import { calculateResponsiveFontSize } from "@kids-game-ui/utils"

import type { SelectArrowButtonProps } from "@kids-game-ui/button"

// 全体のコンテナ
const containerStyle = (
    height: CSSProperties["height"],
    width: CSSProperties["width"],
    border: CSSProperties["border"],
) => {
    return css`
        display: flex;
        min-width: 50px;
        min-height: 50px;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        font-family: inherit;
        height: ${height};
        width: ${width};
        border: ${border};
    `
}

export type YesNoPopupProps = {
    /** コンテナの高さ */
    height?: CSSProperties["height"]
    /** コンテナの横幅 */
    width?: CSSProperties["width"]
    /** 枠の色*/
    border?: CSSProperties["border"]
    /** ボタンの背景色 */
    buttonColor?: CSSProperties["color"]
    /** 文字の色 */
    fontColor?: CSSProperties["color"]
    /** はいが選択された時のハンドラ */
    handleClickYes: () => void
    /** いいえが選択された時のハンドラ */
    handleClickNo: () => void
}

export const YesNoPopup: React.FC<YesNoPopupProps> = ({
    height = "100px",
    width = "100px",
    border = "2mm ridge rgb(255, 255, 255)",
    handleClickYes,
    handleClickNo,
    buttonColor = "transparent",
    fontColor = "black",
}) => {
    const buttonFontSize = calculateResponsiveFontSize({
        width,
        height,
        baseWidth: 100,
        baseHeight: 100,
        baseFontSize: 16,
        minWidth: 50,
        minHeight: 50,
    })

    const buttonList: SelectArrowButtonProps[] = [
        {
            label: "はい",
            width: "100%",
            onClick: handleClickYes,
            buttonColor: buttonColor,
            fontColor: fontColor,
            fontSize: buttonFontSize + "px",
        },
        {
            label: "いいえ",
            width: "100%",
            onClick: handleClickNo,
            buttonColor: buttonColor,
            fontColor: fontColor,
            fontSize: buttonFontSize + "px",
        },
    ]

    return (
        <div css={containerStyle(height, width, border)}>
            <SelectArrowButtonLists lists={buttonList} direction="column" />
        </div>
    )
}
