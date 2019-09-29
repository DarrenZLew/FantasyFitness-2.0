import React from "react";
import { CreateNewGroup } from "../../../common";

const Season = props => {
  const { leagueId } = props;
  const url = `/leagues/${leagueId}/season`;
  const text = "Current season has not started yet";
  const createBtnText = "Create New Season";

  return <CreateNewGroup routeUrl={url} text={text} createBtnText={createBtnText} />;
};

export default Season;
