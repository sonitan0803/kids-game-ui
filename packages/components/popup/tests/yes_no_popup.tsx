import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"

import { YesNoPopup } from "../src/yes_no_popup"
import "@testing-library/jest-dom"

describe("YesNoPopup", () => {
    it("ラベルが表示されること", () => {
        render(<YesNoPopup label="テストラベル" />)
        expect(screen.getByText("テストラベル")).toBeInTheDocument()
    })
})
