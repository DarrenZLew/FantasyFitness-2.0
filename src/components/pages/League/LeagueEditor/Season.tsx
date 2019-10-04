import React from "react";
import { CreateNewGroup } from "../../../common";
import { ILeagueId } from "../../../../types";

const Season: React.FC<ILeagueId> = props => {
  const { leagueId } = props;
  const url = `/leagues/${leagueId}/season`;
  const createBtnText = "Create New Season";

  return <CreateNewGroup routeUrl={url} createBtnText={createBtnText} />;
};

export default Season;
