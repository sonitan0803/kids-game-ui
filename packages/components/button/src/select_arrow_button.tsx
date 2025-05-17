import React from "react"

import { css } from "@emotion/react"
import { calculateResponsiveFontSize } from "@kids-game-ui/utils"

import type {
    SelectArrowButtonProps,
    SelectArrowButtonListsProps,
} from "./index.types"

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

export const SelectArrowButton: React.FC<SelectArrowButtonProps> = ({
    label,
    width,
    height,
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

export const SelectArrowButtonLists: React.FC<SelectArrowButtonListsProps> = ({
    lists,
    direction = "column",
    gap = "0px",
}) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: direction,
                gap: gap,
                width: "100%",
                height: "100%",
            }}
        >
            {lists.map((list, index) => {
                return (
                    <div key={index} style={{ flex: 1, display: "flex" }}>
                        <SelectArrowButton
                            label={list.label}
                            onClick={list.onClick}
                            width="100%"
                            height="100%"
                            buttonColor={list.buttonColor}
                            fontColor={list.fontColor}
                            fontSize={list.fontSize}
                            border={list.border}
                            hoverColor={list.hoverColor}
                            activeColor={list.activeColor}
                        />
                    </div>
                )
            })}
        </div>
    )
}
