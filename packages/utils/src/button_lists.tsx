import React from "react"

import { SelectArrowButton } from "@kids-game-ui/button"

import type { SelectArrowButtonProps } from "@kids-game-ui/button"

interface SelectArrowButtonListsProps {
    lists: SelectArrowButtonProps[]
    /** "row" or "column" でボタンの並び方向を指定 */
    direction?: "row" | "column"
    /** ボタン同士の間隔（例: "16px"） */
    gap?: string
}

export const SelectArrowButtonLists: React.FC<SelectArrowButtonListsProps> = ({
    lists,
    direction = "column",
    gap = "16px",
}) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: direction,
                gap: gap,
            }}
        >
            {lists.map((list, index) => {
                return (
                    <SelectArrowButton
                        key={index}
                        label={list.label}
                        onClick={list.onClick}
                        height={list.height}
                        width={list.width}
                        buttonColor={list.buttonColor}
                        fontColor={list.fontColor}
                        fontSize={list.fontSize}
                        border={list.border}
                        hoverColor={list.hoverColor}
                        activeColor={list.activeColor}
                    />
                )
            })}
        </div>
    )
}
