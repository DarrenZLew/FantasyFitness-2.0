import React from "react";
import { LeagueHomePage, LeagueCreate } from "../League";

const LeaguePageRender = ({ location: { type = "home" } }) => {
  if (type === "home") {
    return <LeagueHomePage />;
  } else if (type === "create") {
    return <LeagueCreate />;
  }
  return null;
};

export default LeaguePageRender;
