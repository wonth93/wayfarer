import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import "typeface-source-sans-pro";

// Setting MUI Typoraphy as custom throughout application
const customTheme = createTheme({
  typography: {
    fontFamily: ["Source Sans Pro", "Arial", "sans-serif"].join(","),
    h1: {
      fontSize: "3rem",
      fontWeight: 500,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 600,
      letterSpacing: "-0.00833em",
    },
  },
});

export { customTheme, ThemeProvider };
