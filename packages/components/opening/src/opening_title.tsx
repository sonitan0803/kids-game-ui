import React from "react";
import { css } from "@emotion/react";

const titleContainer = css`
    width: var(--title-height);
    height: var(--title-width);
    margin-top: 10%;
    box-sizing: border-box;
    border: 4mm ridge rgb(252, 255, 171);
`;

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
`;

type OpeningTitleProps = {
    /** 表示するタイトル */
    children: string;
    height?: string;
    width?: string;
    fontSize?: string;
    fontColor?: string;
};

export const OpeningTitle: React.FC<OpeningTitleProps> = ({
    children,
    height = "150px",
    width = "150px",
    fontColor = "black",
    fontSize = "16px",
}) => {
    return (
        <div
            css={titleContainer}
            style={
                {
                    "--title-height": height,
                    "--title-width": width,
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
    );
};
