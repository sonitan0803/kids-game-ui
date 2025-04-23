import { render, screen } from "@testing-library/react";
import { Button } from "../src/button";
import "@testing-library/jest-dom";

test("renders button with label", () => {
    render(<Button label="Click" />);
    expect(screen.getByText("Click")).toBeInTheDocument();
});
