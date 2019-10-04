import React from "react";
import Typography from "@material-ui/core/Typography";
import LeagueInfo from "./LeagueInfo";
import { PaddingContainer, TopContainer } from "../../../common";

export const LeagueCreate: React.FC = () => {
  return (
    <TopContainer>
      <PaddingContainer>
        <Typography component="h1" variant="h5">
          Create New League
        </Typography>
        <LeagueInfo />
      </PaddingContainer>
    </TopContainer>
  );
};
