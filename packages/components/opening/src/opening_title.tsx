import React from "react"
import type { CSSProperties } from "react"

import { css } from "@emotion/react"

const titleContainer = css`
    width: var(--title-height);
    height: var(--title-width);
    margin-top: 10%;
    box-sizing: border-box;
    border: 4mm ridge var(--border-color);
`

const titleText = css`
    font-family: inherit;
    display: flex;
    margin: 0 0 0 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    font-size: var(--title-font-size);
    font-weight: bold;
    align-items: center;
    justify-content: center;
    color: var(--title-font-color);
`

type OpeningTitleProps = {
    /** 表示するタイトル */
    children: React.ReactNode
    /** 高さ */
    height?: CSSProperties["height"]
    /** 幅 */
    width?: CSSProperties["width"]
    /** 文字サイズ */
    fontSize?: CSSProperties["fontSize"]
    /** 文字色 */
    fontColor?: CSSProperties["color"]
    /** 枠の色*/
    borderColor?: CSSProperties["color"]
}

export const OpeningTitle: React.FC<OpeningTitleProps> = ({
    children,
    height = "150px",
    width = "150px",
    fontColor = "black",
    fontSize = "16px",
    borderColor = "rgb(252, 255, 171)",
}) => {
    return (
        <div
            css={titleContainer}
            style={
                {
                    "--title-height": height,
                    "--title-width": width,
                    "--border-color": borderColor,
                } as React.CSSProperties
            }
        >
            <p
                css={titleText}
                style={
                    {
                        "--title-font-color": fontColor,
                        "--title-font-size": fontSize,
                    } as React.CSSProperties
                }
            >
                {children}
            </p>
        </div>
    )
}
