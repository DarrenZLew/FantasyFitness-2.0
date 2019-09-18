import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import SeasonInfo from "./SeasonInfo";
import { PaddingContainer, TopContainer, ButtonTwoGroup } from "../../../common";

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  hide: {
    visibility: "hidden"
  }
}));

export const SeasonCreate = () => {
  const classes = useStyles();
  const [formPage, updateFormPage] = useState(0);
  const [seasonState, updateSeasonState] = useState({
    weeks: "",
    "start-date": null
  });

  const pages = [<SeasonInfo seasonState={seasonState} updateLeagueState={updateSeasonState} />];
  const lastPage = formPage === pages.length - 1;
  const firstPage = formPage === 0;
  const nextPage = () => {
    updateFormPage(formPage + 1);
  };

  const previousPage = () => {
    updateFormPage(formPage - 1);
  };

  return (
    <TopContainer>
      <PaddingContainer>
        <Typography component="h1" variant="h5">
          Create New Season
        </Typography>
        <form className={classes.form} noValidate>
          {pages[formPage]}
          <ButtonTwoGroup
            leftBtn={{
              disabled: firstPage,
              onClick: previousPage,
              text: "Previous"
            }}
            rightBtn={{
              onClick: lastPage ? () => {} : nextPage,
              text: lastPage ? <span>Create Season</span> : <span>Next</span>
            }}
          />
        </form>
      </PaddingContainer>
    </TopContainer>
  );
};
