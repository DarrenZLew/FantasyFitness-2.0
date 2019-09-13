import React from "react";
import { Route, Switch } from "react-router-dom";
import { MenuRouter } from "./menu/MenuRouter";
import {
  Login,
  Signup,
  Score,
  ScoreSheet,
  ForgotPassword,
  LeagueCreate,
  LeagueEditor,
  SeasonCreate
} from "./pages";

const Routes = ({ auth }) => {
  const pageRender = (props, Page) => {
    return !auth ? (
      <MenuRouter>
        <Page {...props} />
      </MenuRouter>
    ) : (
      <Page {...props} />
    );
  };

  return (
    <Switch>
      <Route path="/" exact render={props => pageRender(props, Login)} />
      <Route path="/login" exact render={props => pageRender(props, Login)} />
      <Route path="/login/identity" exact render={props => pageRender(props, ForgotPassword)} />
      <Route path="/signup" exact render={props => pageRender(props, Signup)} />
      <Route path="/score" exact render={props => pageRender(props, Score)} />
      <Route path="/league" exact render={props => pageRender(props, LeagueCreate)} />
      <Route
        path="/league/:leagueId(\d+)"
        exact
        render={props => pageRender(props, LeagueEditor)}
      />
      <Route
        path="/league/:leagueId(\d+)/season"
        exact
        render={props => pageRender(props, SeasonCreate)}
      />
      <Route path="/scoresheet" exact render={props => pageRender(props, ScoreSheet)} />
      {/* <Route path="/profile" exact render={PageRender} />
    <Route path="/logout" exact render={PageRender} /> */}
    </Switch>
  );
};

export default Routes;
