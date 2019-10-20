import { useContext } from "react";
import { leagueContext } from "../../context";

export const useLeagueValue = () => useContext(leagueContext);
