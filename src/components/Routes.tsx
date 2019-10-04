import React from "react";
import { Route, Switch, BrowserRouter as Router, RouteComponentProps } from "react-router-dom";
import { ROUTES_CONFIG } from "../constants";
import { MenuContainer } from "./menu/MenuContainer";
import { AuthContainer } from "../components/common";
import { IRoutePropsObject } from "../constants/ROUTES_CONFIG";
import { IRoutePageProps } from "../types";

const Routes: React.FC = () => {
  const pageRender = (props: any, { Page, hasMenu, requiresAuth }: IRoutePageProps) => {
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
        {ROUTES_CONFIG.map(({ exact, path, ...configs }: IRoutePropsObject, index) => (
          <Route
            key={index}
            path={path}
            exact={exact}
            render={(props: any) => pageRender(props, { ...configs })}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default Routes;
