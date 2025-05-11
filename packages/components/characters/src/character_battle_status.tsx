import type { CSSProperties } from "react"
import React from "react"

import { css } from "@emotion/react"
import { calculateResponsiveFontSize } from "@kids-game-ui/utils"

import type { CharacterData } from "./index.types"

// 全体のコンテナ
const containerStyle = (
    isEnable: boolean,
    height: string,
    width: string,
) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: ${height};
    width: ${width};
    min-width: 100px;
    min-height: 150px;
    background-color: ${isEnable
        ? "rgba(55, 90, 187, 0.4)"
        : "rgba(46, 46, 46, 0.515)"};
    font-family: inherit;
    font-weight: bold;
    box-sizing: content-box;
    border: solid 2px black;
`

const characterImageContainer = css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    height: 40%;
    width: 90%;
    margin-top: 5%;
`

const characterImageStyle = css`
    width: 75%;
    aspect-ratio: 1 / 1;
    object-fit: contain;
`

const characterNameStyle = (fontSize: number) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20%;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    color: white;
    font-size: ${fontSize}px;
`

const statusContainer = css`
    height: 50%;
    width: 90%;
    margin-top: 5%;
`

const statusRowContainer = css`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    height: 50%;
`

const statusLabel = (fontSize: number) => css`
    font-size: ${fontSize}px;
    margin-right: 5%;
    margin-left: 5%;
    color: white;
`

const statusValue = (fontSize: number) => css`
    display: flex;
    flex: 1;
    height: 50%;
    align-items: center;
    position: absolute;
    right: 10%;
    color: white;
    font-size: ${fontSize}px;
`

const statusBar = (flexValue: number, gradient: string) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    box-sizing: content-box;
    flex: ${flexValue};
    height: 50%;
    background-image: ${gradient};
`

const emptyBar = (flexValue: number) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    box-sizing: content-box;
    flex: ${flexValue};
    height: 50%;
    background-color: black;
    margin-right: 5%;
`

type CharacterBattleProps = {
    /** コンテナの高さ */
    height?: CSSProperties["height"]
    /** コンテナの横幅 */
    width?: CSSProperties["width"]
    /** キャラクター情報 */
    characterData: CharacterData
    /** キャラクターが選択対象か */
    isEnable: boolean
}

export const CharacterBattleStatus: React.FC<CharacterBattleProps> = ({
    height = "300px",
    width = "200px",
    characterData,
    isEnable = false,
}) => {
    const strHeight = typeof height === "number" ? `${height}px` : height
    const strWidth = typeof width === "number" ? `${width}px` : width

    const categoryFontSize = calculateResponsiveFontSize({
        width,
        height,
        baseWidth: 200,
        baseHeight: 300,
        baseFontSize: 18,
        minWidth: 100,
        minHeight: 150,
    })

    const valueFontSize = calculateResponsiveFontSize({
        width,
        height,
        baseWidth: 200,
        baseHeight: 300,
        baseFontSize: 16,
        minWidth: 100,
        minHeight: 150,
    })

    const nameFontSize = calculateResponsiveFontSize({
        width,
        height,
        baseWidth: 200,
        baseHeight: 300,
        baseFontSize: 20,
        minWidth: 100,
        minHeight: 150,
    })

    return (
        <div css={containerStyle(isEnable, strHeight, strWidth)}>
            <div css={characterImageContainer}>
                <img
                    css={characterImageStyle}
                    src={characterData.characterImage}
                />
                <div css={characterNameStyle(nameFontSize)}>
                    {characterData.name}
                </div>
            </div>
            <div css={statusContainer}>
                <div css={statusRowContainer}>
                    <p css={statusLabel(categoryFontSize)}>HP</p>
                    <div css={statusValue(valueFontSize)}>
                        {characterData.currentHp}
                    </div>
                    <div
                        css={statusBar(
                            characterData.currentHp / characterData.totalHp,
                            "linear-gradient(90deg, #0f0, #3cba54)",
                        )}
                    />
                    <div
                        css={emptyBar(
                            1 - characterData.currentHp / characterData.totalHp,
                        )}
                    />
                </div>
                <div css={statusRowContainer}>
                    <p css={statusLabel(categoryFontSize)}>MP</p>
                    <div css={statusValue(valueFontSize)}>
                        {characterData.currentMp}
                    </div>
                    <div
                        css={statusBar(
                            characterData.currentMp / characterData.totalMp,
                            "linear-gradient(90deg, #007BFF, #00C6FF)",
                        )}
                    />
                    <div
                        css={emptyBar(
                            1 - characterData.currentMp / characterData.totalMp,
                        )}
                    />
                </div>
            </div>
        </div>
    )
}
