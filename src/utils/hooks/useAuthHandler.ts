import { useState } from "react";
import { DEFAULT_USER_AUTH } from "../../constants";
import { IUserAuthDataProps } from "../../types";

export const useAuthHandler = (initialState: IUserAuthDataProps) => {
  const [auth, setAuth] = useState(initialState);
  const setAuthStatus = (userAuth: IUserAuthDataProps) => {
    window.localStorage.setItem("UserAuth", JSON.stringify(userAuth));
    setAuth(userAuth);
  };
  const setUnauthStatus = () => {
    window.localStorage.clear();
    setAuth(DEFAULT_USER_AUTH);
  };
  return {
    auth,
    setAuthStatus,
    setUnauthStatus
  };
};
