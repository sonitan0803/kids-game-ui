import { style } from "@vanilla-extract/css";

export const container = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "2px solid black",
    width: "var(--menu-width)",
    height: "var(--menu-height)",
});

export const menuButton = style({
    width: "100%",
    flex: 1,
    background: "transparent",
    border: "2px solid transparent",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    selectors: {
        "&:hover:enabled": {
            backgroundColor: "#d5d5d5d5",
            transform: "translateY(-4px)",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        },
        "&:active:enabled": {
            backgroundColor: "#a1a1a1d5",
        },
    },
});
