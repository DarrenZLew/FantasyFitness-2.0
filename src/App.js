import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Routes from "./components/Routes";
import { AuthContextProvider } from "./context";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#1e88e5"
    },
    secondary: {
      main: "#5e35b1"
    },
    error: red,
    tonalOffset: 0.2
  }
});

function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <div className="app-container">
            <CssBaseline />
            <Routes />
          </div>
        </AuthContextProvider>
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  );
}

export default App;
