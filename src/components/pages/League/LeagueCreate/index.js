import React from "react";
import Typography from "@material-ui/core/Typography";
import LeagueInfo from "./LeagueInfo";
import { PaddingContainer, TopContainer } from "../../../layout";
import { useForm } from "../../../../utils";

export const LeagueCreate = () => {
  const initialState = {
    name: "",
    type: ""
  };

  const url = "http://localhost:5000/league";
  const { values, handleInputChange, handleSubmit } = useForm(initialState, url, () => {});

  return (
    <TopContainer>
      <PaddingContainer>
        <Typography component="h1" variant="h5">
          Create New League
        </Typography>
        <LeagueInfo
          values={values}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </PaddingContainer>
    </TopContainer>
  );
};
