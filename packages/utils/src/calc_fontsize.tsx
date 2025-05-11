import type { CSSProperties } from "react"

export function calculateResponsiveFontSize({
    width,
    height,
    baseWidth = 100,
    baseHeight = 100,
    baseFontSize = 16,
    minWidth = 100,
    minHeight = 100,
}: {
    width: CSSProperties["width"]
    height: CSSProperties["height"]
    baseWidth?: number
    baseHeight?: number
    baseFontSize?: number
    minWidth?: number
    minHeight?: number
}): number {
    const parseSize = (
        value: CSSProperties["width"] | CSSProperties["height"],
    ): number => {
        if (typeof value === "number") return value
        if (typeof value === "string" && value.endsWith("px")) {
            return parseFloat(value)
        }
        console.warn("Unsupported size unit:", value)
        return 0 // fallback
    }

    const numericWidth = Math.max(parseSize(width), minWidth)
    const numericHeight = Math.max(parseSize(height), minHeight)

    const scaleWidth = numericWidth / baseWidth
    const scaleHeight = numericHeight / baseHeight
    const scale = Math.min(scaleWidth, scaleHeight)

    return baseFontSize * scale
}
