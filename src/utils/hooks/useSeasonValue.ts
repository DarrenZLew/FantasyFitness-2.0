import { useContext } from "react";
import { seasonContext } from "../../context";

export const useSeasonValue = () => useContext(seasonContext);
