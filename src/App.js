import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Login } from "./components/Pages";
import { MenuRouter } from "./components/Menu/MenuRouter";

const Routes = () => (
  <Switch>
    <Route path="/" exact render={props => <Login />} />
    <Route path="/score" exact render={props => <Login />} />
    <Route path="/scoresheet" exact render={props => <Login />} />
    <Route path="/league" exact render={props => <Login />} />
    <Route path="/profile" exact render={props => <Login />} />
    <Route path="/logout" exact render={props => <Login />} />
  </Switch>
);

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
