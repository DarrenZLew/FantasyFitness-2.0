import { useContext } from "react";
import { seasonContext, leagueContext, authContext } from "../../context";

export const useSeasonValue = () => useContext(seasonContext);
export const useLeagueValue = () => useContext(leagueContext);
export const useAuthValue = () => useContext(authContext);
