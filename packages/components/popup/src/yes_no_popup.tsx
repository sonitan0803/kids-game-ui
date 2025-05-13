import React, { useState } from "react"
import type { CSSProperties } from "react"

import { css } from "@emotion/react"
import { calculateResponsiveFontSize } from "@kids-game-ui/utils"

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
        height: ${height};
        width: ${width};
        border: ${border};
    `
}

// ボタンのスタイル
const selectButtonStyle = (buttonFontSize: CSSProperties["fontSize"]) => {
    return css`
        width: 100%;
        height: 40%;
        border: 2px solid transparent;
        background: transparent;
        font-size: ${buttonFontSize}px;
        font-family: inherit;

        &:enabled:hover {
            transform: translateY(-4px);
            font-weight: bold;
        }

        &:enabled:active {
            font-weight: bold;
            color: #a1a1a1d5;
        }
    `
}

export type YesNoPopupProps = {
    /** コンテナの高さ */
    height?: CSSProperties["height"]
    /** コンテナの横幅 */
    width?: CSSProperties["width"]
    /** 枠の色*/
    border?: CSSProperties["border"]
    /** はいが選択された時のハンドラ */
    handleClickYes: () => void
    /** いいえが選択された時のハンドラ */
    handleClickNo: () => void
}

type MenuKey = "isYes" | "isNo"

export const YesNoPopup: React.FC<YesNoPopupProps> = ({
    height = "100px",
    width = "100px",
    border = "2mm ridge rgb(255, 255, 255)",
    handleClickYes,
    handleClickNo,
}) => {
    const [selected, setSelected] = useState<MenuKey | null>(null)

    const buttonList: {
        label: string
        key: MenuKey
        onClick: () => void
    }[] = [
        { label: "はい", key: "isYes", onClick: handleClickYes },
        {
            label: "いいえ",
            key: "isNo",
            onClick: handleClickNo,
        },
    ]

    const buttonFontSize = calculateResponsiveFontSize({
        width,
        height,
        baseWidth: 100,
        baseHeight: 100,
        baseFontSize: 16,
        minWidth: 50,
        minHeight: 50,
    })

    return (
        <div css={containerStyle(height, width, border)}>
            {buttonList.map(({ label, key, onClick }) => (
                <button
                    key={key}
                    css={selectButtonStyle(buttonFontSize)}
                    onClick={onClick}
                    onMouseEnter={() => setSelected(key)}
                    onMouseLeave={() => setSelected(null)}
                >
                    {label} {selected === key && "←"}
                </button>
            ))}
        </div>
    )
}
