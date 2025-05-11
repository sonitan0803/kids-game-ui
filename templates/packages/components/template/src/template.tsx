import React from "react"

import { css } from "@emotion/react"

// 全体のコンテナ（画像＋テキスト）
const containerStyle = css`
    display: flex;
`

export type TemplateProps = {
    label: string
}

export const Template: React.FC<TemplateProps> = ({ label }) => {
    return <div css={containerStyle}>{label}</div>
}
