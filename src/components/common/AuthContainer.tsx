import React, { useContext } from "react";
import { authContext } from "../../context";
import { Unauthorized } from "../common";
import { IRoutePageProps } from "../../types";

const AuthContainer: React.FC<IRoutePageProps> = ({ requiresAuth, children }) => {
  const { auth } = useContext(authContext);
  if (requiresAuth && !auth) {
    return <Unauthorized />;
  } else if (!requiresAuth || (requiresAuth && auth)) {
    return children;
  }
};

export default AuthContainer;
