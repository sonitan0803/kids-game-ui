import type { CSSProperties } from "react"

export type SelectArrowButtonProps = {
    label: string
    onClick: () => void
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
