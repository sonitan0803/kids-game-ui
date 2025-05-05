import React from "react";
import { css } from "@emotion/react";

// 全体のコンテナ（画像＋テキスト）
const containerStyle = css`
    display: flex;
    flex-direction: column;
    height: var(--container-height);
    width: var(--container-width);
    margin: 0 0 0 0;
    background-color: rgba(73, 73, 73, 0.4);
    box-sizing: border-box;
    border: 4px ridge rgba(255, 255, 255, 1);
`;

// 画像側のコンテナ
const imageWrapper = css`
    display: flex;
    align-items: center;
`;

// テキスト全体のラッパー（85%の上部＋15%の下部）
const textWrapper = css`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

// 名前とセリフ部分（上部）
const dialogueArea = css`
    height: 85%;
    width: 100%;
    padding: 0 1%;
    overflow-wrap: break-word;
    white-space: pre-wrap;
    color: white;
    overflow-y: auto;
    box-sizing: border-box;
`;

// キャラクター名のスタイル
const nameText = css`
    color: white;
    font-size: var(--character-name-font-size);
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* 黒い縁 */
`;

// セリフテキストのスタイル
const dialogueText = css`
    margin-left: 1%;
    color: white;
    font-size: var(--character-line-font-size); /* 基準は16px */
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* 黒い縁 */
    line-height: 140%;
`;

// 下部ボタン（▼）を含むコンテナ
const footer = css`
    display: flex;
    height: 10%;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

// ▼マークの点滅アニメーション
const blinkingArrow = css`
    animation: blink 2s step-start infinite;

    @keyframes blink {
        50% {
            opacity: 0;
        }
    }
`;

// キャラクター画像のスタイル
const characterImageStyle = css`
    height: 80%;
    aspect-ratio: 1 / 1;
    object-fit: cover;

    @media (min-width: 768px) {
        height: 90%; /* 高画面サイズで画像を大きく */
    }
`;

// ▼ボタン自体のスタイル
const arrowButton = css`
    background: transparent;
    border: 2px solid transparent;
    color: white;
    font-size: var(--button-font-size); /* 基準サイズ */
`;

interface CharacterLineProps {
    /** 表示するメッセージ */
    children: string;
    /** キャラクターの名前 */
    characterName: string;
    /** キャラクターの画像 */
    characterImage?: string;
    /** ▼が押されたときの動作 */
    handleMessageClick: () => void;
    /** メッセージの縦幅 */
    height?: string;
    /** メッセージの横幅 */
    width?: string;
    /** メッセージの表示 */
    isEnd: boolean;
    /** キャラクター名のフォントサイズ */
    characterNameText?: string;
    /** セリフのフォントサイズ */
    characterLineText?: string;
    /**　次のボタンのサイズ */
    buttonSize?: string;
}

export const CharacterLine: React.FC<CharacterLineProps> = ({
    children,
    characterName,
    characterImage,
    handleMessageClick,
    height = "100px",
    width = "100%",
    isEnd,
    characterNameText = "15.5px",
    characterLineText = "14px",
    buttonSize = "16px",
}) => {
    if (isEnd) {
        return;
    }

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
            <div
                style={{
                    height: "90%",
                    width: "100%",
                    display: "flex",
                }}
            >
                {characterImage && (
                    <div css={imageWrapper}>
                        <img css={characterImageStyle} src={characterImage} />
                    </div>
                )}
                <div css={textWrapper}>
                    <div css={dialogueArea}>
                        <div
                            css={nameText}
                            style={
                                {
                                    "--character-name-font-size":
                                        characterNameText,
                                } as React.CSSProperties
                            }
                        >
                            {characterName}
                        </div>
                        <div
                            css={dialogueText}
                            style={
                                {
                                    "--character-line-font-size":
                                        characterLineText,
                                } as React.CSSProperties
                            }
                        >
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            <div css={[footer, blinkingArrow]}>
                <button
                    onClick={handleMessageClick}
                    css={arrowButton}
                    style={
                        {
                            "--button-font-size": buttonSize,
                        } as React.CSSProperties
                    }
                >
                    ▼
                </button>
            </div>
        </div>
    );
};
