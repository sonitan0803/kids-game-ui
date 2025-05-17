import React from "react"
import type { CSSProperties } from "react"

import { css } from "@emotion/react"
import { calculateResponsiveFontSize } from "@kids-game-ui/utils"

const buttonStyles = css`
    width: var(--button-width);
    height: var(--button-height);
    background: var(--button-color);
    color: var(--font-color);
    font-family: inherit;
    font-size: var(--font-size);
    border: var(--border);
    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;

    &:enabled:hover {
        background-color: var(--hover-color);
        transform: translateY(-4px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    &:enabled:active {
        background-color: var(--active-color);
    }

    &:hover::after {
        content: "←";
        margin-left: 8px;
    }
`
export type SelectArrowButtonProps = {
    label: string
    onClick?: () => void
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
    /** ボタンの枠線 */
    border?: CSSProperties["border"]
    /** ホバー時の背景色 */
    hoverColor?: CSSProperties["backgroundColor"]
    /** アクティブ時の背景色 */
    activeColor?: CSSProperties["backgroundColor"]
}

export const SelectArrowButton: React.FC<SelectArrowButtonProps> = ({
    label,
    width = "150px",
    height = "150px",
    buttonColor = "transparent",
    fontColor = "black",
    fontSize,
    border = "2px solid transparent",
    hoverColor = "#d5d5d5d5",
    activeColor = "#a1a1a1d5",
    onClick,
}) => {
    const buttonFont =
        fontSize ??
        calculateResponsiveFontSize({
            width,
            height,
            baseWidth: 100,
            baseHeight: 100,
            baseFontSize: 16,
            minWidth: 100,
            minHeight: 100,
        }) + "px"

    return (
        <button
            css={buttonStyles}
            style={
                {
                    "--button-width": width,
                    "--button-height": height,
                    "--button-color": buttonColor,
                    "--font-color": fontColor,
                    "--font-size": buttonFont,
                    "--border": border,
                    "--hover-color": hoverColor,
                    "--active-color": activeColor,
                } as React.CSSProperties
            }
            onClick={onClick}
        >
            {label}
        </button>
    )
}
