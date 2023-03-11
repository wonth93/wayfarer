import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles/layout.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { AppProvider } from "./context";
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

ReactDOM.render(
  <AppProvider>
    <ThemeProvider theme={customTheme}>
      <App />
    </ThemeProvider>
  </AppProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
