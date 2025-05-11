import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"

import { Template } from "../src/template"
import "@testing-library/jest-dom"

describe("Template", () => {
    it("ラベルが表示されること", () => {
        render(<Template label="テストラベル" />)
        expect(screen.getByText("テストラベル")).toBeInTheDocument()
    })
})
