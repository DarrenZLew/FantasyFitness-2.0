import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Routes from "./components/Routes";

function App() {
  const [auth, setAuth] = React.useState(false);
  return (
    <div className="app-container">
      <CssBaseline />
      <Router>
        <Routes auth={auth} />
      </Router>
    </div>
  );
}

export default App;
