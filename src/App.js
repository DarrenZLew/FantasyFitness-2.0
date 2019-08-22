import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import Routes from "./components/Routes";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#1e88e5"
    },
    secondary: {
      main: "#7e57c2"
    },
    error: red,
    tonalOffset: 0.2
  }
});

function App() {
  const [auth, setAuth] = React.useState(false);
  return (
    <ThemeProvider theme={theme}>
      <div className="app-container">
        <CssBaseline />
        <Router>
          <Routes auth={auth} />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
