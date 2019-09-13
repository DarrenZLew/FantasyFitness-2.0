import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import LeagueInfo from "./LeagueInfo";
import ActivityPage from "./ActivityPage";
import BonusPage from "./BonusPage";
import { PaddingContainer, TopContainer, ButtonTwoGroup } from "../../../layout";

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  hide: {
    visibility: "hidden"
  }
}));

export const LeagueCreate = () => {
  const classes = useStyles();
  const [formPage, updateFormPage] = useState(0);
  const [leagueState, updateLeagueState] = useState({
    name: "",
    type: ""
  });
  const [activityState, updateActivityState] = useState([]);

  const pages = [
    <LeagueInfo leagueState={leagueState} updateLeagueState={updateLeagueState} />,
    <ActivityPage activityState={activityState} updateActivityState={updateActivityState} />
  ];
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
          Create New League
        </Typography>
        <form className={classes.form} noValidate>
          {pages[formPage]}
          <ButtonTwoGroup
            leftBtn={{ disabled: firstPage, onClick: previousPage, text: "Previous" }}
            rightBtn={{
              onClick: lastPage ? () => {} : nextPage,
              text: lastPage ? <span>Create League</span> : <span>Next</span>
            }}
          />
        </form>
      </PaddingContainer>
    </TopContainer>
  );
};
