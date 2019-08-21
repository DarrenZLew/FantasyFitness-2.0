import React from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "./Pages";

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

export default Routes;
