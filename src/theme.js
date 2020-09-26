import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#FFC321",
        },
        secondary: {
            main: "#263238",
        },
        text: {
            primary: "#333736",
        },
        common: {
            lightYellow: "#FBE09D",
            lightGrey: "#f5f5f5",
            turquoise: "#00B7BE",
            darkGrey: "#393838",
            white: "#ffffff",
            black: "#000000",
            darkWhite: "",
        },
    },
    typography: {
        fontFamily: "Montserrat",
    },
});

export default theme;
