import React, { createContext } from "react";
import { useAuthHandler, getStoredUserAuth } from "../utils";
import { DEFAULT_USER_AUTH } from "../constants";
import { IUserAuthDataProps } from "../types";

type ITheme = {
  auth: IUserAuthDataProps;
  setAuthStatus: (userAuth: IUserAuthDataProps) => void;
  setUnauthStatus: () => void;
};

export const authContext = createContext<ITheme>({
  auth: DEFAULT_USER_AUTH,
  setAuthStatus: () => {},
  setUnauthStatus: () => {}
});
const { Provider } = authContext;
const AuthProvider: React.FC = ({ children }) => {
  const { auth, setAuthStatus, setUnauthStatus } = useAuthHandler(getStoredUserAuth());
  return <Provider value={{ auth, setAuthStatus, setUnauthStatus }}>{children}</Provider>;
};
export default AuthProvider;
