import { createTheme } from "@mui/material/styles";
import { COLORS } from "./color";

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1329,
            xl: 1536,
        },
    },
    palette: {
        primary: {
            main: COLORS.primary,
        },
    },
    typography: {
        fontFamily: ["Ubuntu", "sans-serif"].join(","),
        subtitle1: {
            fontFamily: ["Montserrat", "sans-serif"].join(","),
        },
        h2: {
            fontWeight: 700,
            fontSize: "40px",
            lineHeight: "130%",
            color: COLORS.textColor,
        },
    },
});
