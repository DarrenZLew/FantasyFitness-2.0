import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { ROUTES_CONFIG } from "../constants";
import { MenuContainer } from "./menu/MenuContainer";
import { AuthContainer } from "../components/common";

// Remove auth with actual auth from auth context
const Routes = () => {
  const pageRender = (props, { Page, hasMenu, requiresAuth }) => {
    return (
      <AuthContainer requiresAuth={requiresAuth}>
        <MenuContainer hasMenu={hasMenu}>
          <Page {...props} />
        </MenuContainer>
      </AuthContainer>
    );
  };

  return (
    <Router>
      <Switch>
        {ROUTES_CONFIG.map(({ exact, path, ...configs }, index) => (
          <Route
            key={index}
            path={path}
            exact={exact}
            render={props => pageRender(props, { ...configs })}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default Routes;
