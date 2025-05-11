import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"

import { CharacterBattleStatus } from "../src/character_battle_status"
import "@testing-library/jest-dom"

describe("Template", () => {
    it("ラベルが表示されること", () => {
        render(<CharacterBattleStatus label="テストラベル" />)
        expect(screen.getByText("テストラベル")).toBeInTheDocument()
    })
})
