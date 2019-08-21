import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MenuRouter } from "./components/Menu/MenuRouter";
import Routes from "./components/Routes";

function App() {
  return (
    <div className="app-container">
      <CssBaseline />
      <Router>
        <MenuRouter />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
