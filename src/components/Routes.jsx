import React from "react";
import { Route, Switch } from "react-router-dom";
import { MenuRouter } from "./Menu/MenuRouter";
import { Login, Signup, Score } from "./Pages";

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
      <Route path="/signup" exact render={props => pageRender(props, Signup)} />
      <Route path="/score" exact render={props => pageRender(props, Score)} />
      {/* <Route path="/scoresheet" exact render={PageRender} />
    <Route path="/league" exact render={PageRender} />
    <Route path="/profile" exact render={PageRender} />
    <Route path="/logout" exact render={PageRender} /> */}
    </Switch>
  );
};

export default Routes;
