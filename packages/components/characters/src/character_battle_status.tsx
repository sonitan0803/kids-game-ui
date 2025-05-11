import type { CSSProperties } from "react"
import React from "react"

import { css } from "@emotion/react"
import { calculateResponsiveFontSize } from "@kids-game-ui/utils"

import type { CharacterData } from "./index.types"

// 全体のコンテナ
const containerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: var(--container-height);
    width: var(--container-width);
    min-width: 100px;
    min-height: 150px;
    background-color: rgba(73, 73, 73, 0.4);
    font-family: inherit;
    font-weight: bold;
`
// キャラクター画像
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

// ステータス範囲
const statusContainer = css`
    height: 50%;
    width: 90%;
    margin-top: 5%;
`

// HPステータス
const hpStatusContainer = css`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    height: 50%;
`

// MPステータス
const mpStatusContainer = css`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    height: 50%;
`

// 画像のCSS
const characterImageStyle = css`
    width: 75%;
    aspect-ratio: 1 / 1;
    object-fit: contain;
`

type CharacterBattleProps = {
    height?: CSSProperties["height"]
    width?: CSSProperties["width"]
    characterData: CharacterData
}

export const CharacterBattleStatus: React.FC<CharacterBattleProps> = ({
    height = "300px",
    width = "200px",
    characterData,
}) => {
    // カテゴリの文字のフォントサイズ
    const categoryFontSize = calculateResponsiveFontSize({
        width,
        height,
        baseWidth: 200,
        baseHeight: 300,
        baseFontSize: 18,
        minWidth: 100,
        minHeight: 150,
    })
    // HP,MPの値
    const ValueFontSize = calculateResponsiveFontSize({
        width,
        height,
        baseWidth: 200,
        baseHeight: 300,
        baseFontSize: 16,
        minWidth: 100,
        minHeight: 150,
    })
    // キャラクター名
    const characterNameFontSize = calculateResponsiveFontSize({
        width,
        height,
        baseWidth: 200,
        baseHeight: 300,
        baseFontSize: 20,
        minWidth: 100,
        minHeight: 150,
    })

    return (
        <div
            css={containerStyle}
            style={
                {
                    "--container-height": height,
                    "--container-width": width,
                } as React.CSSProperties
            }
        >
            <div css={characterImageContainer}>
                <img
                    css={characterImageStyle}
                    src={characterData.characterImage}
                />
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        height: "20%",
                        position: "absolute",
                        top: "100%",
                        left: "50%",
                        transform: "translateY(-50%) translateX(-50%)",
                        color: "white",
                        fontSize: characterNameFontSize,
                    }}
                >
                    {characterData.name}
                </div>
            </div>
            <div css={statusContainer}>
                <div css={hpStatusContainer}>
                    <p
                        style={{
                            fontSize: categoryFontSize,
                            marginRight: "5%",
                            marginLeft: "5%",
                            color: "white",
                        }}
                    >
                        HP
                    </p>
                    <div
                        style={{
                            display: "flex",
                            flex: "1",
                            height: "50%",
                            alignItems: "center",
                            position: "absolute",
                            right: "10%",
                            color: "white",
                            fontSize: ValueFontSize,
                        }}
                    >
                        {characterData.currentHp}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            boxSizing: "content-box",
                            flex:
                                characterData.currentHp / characterData.totalHp,
                            height: "50%",
                            backgroundImage:
                                "linear-gradient(90deg, #0f0, #3cba54)",
                        }}
                    />
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            boxSizing: "content-box",
                            flex:
                                1 -
                                characterData.currentHp / characterData.totalHp,
                            height: "50%",
                            backgroundColor: "black",
                            marginRight: "5%",
                        }}
                    />
                </div>
                <div css={mpStatusContainer}>
                    <p
                        style={{
                            fontSize: categoryFontSize,
                            marginRight: "5%",
                            marginLeft: "5%",
                            color: "white",
                        }}
                    >
                        MP
                    </p>
                    <div
                        style={{
                            display: "flex",
                            flex: "1",
                            height: "50%",
                            alignItems: "center",
                            position: "absolute",
                            right: "10%",
                            color: "white",
                            fontSize: ValueFontSize,
                        }}
                    >
                        {characterData.currentMp}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            boxSizing: "content-box",
                            flex:
                                characterData.currentMp / characterData.totalMp,
                            height: "50%",
                            backgroundImage:
                                "linear-gradient(90deg, #007BFF, #00C6FF)",
                        }}
                    />
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            boxSizing: "content-box",
                            flex:
                                1 -
                                characterData.currentMp / characterData.totalMp,
                            height: "50%",
                            backgroundColor: "black",
                            marginRight: "5%",
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
