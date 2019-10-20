import React, { createContext, useContext } from "react";
import { ILeagueId } from "../types";

export const leagueContext = createContext<ILeagueId>({
  leagueId: ""
});
const { Provider } = leagueContext;
export const LeagueProvider: React.FC<ILeagueId> = ({ children, leagueId }) => {
  return <Provider value={{ leagueId }}>{children}</Provider>;
};
