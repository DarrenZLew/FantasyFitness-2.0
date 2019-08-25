import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import LeagueInfo from "./LeagueInfo";
import ActivityPage from "./ActivityPage";
import BonusPage from "./BonusPage";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(2, 1, 2)
  },
  hide: {
    visibility: "hidden"
  },
  icon: {
    fontSize: 25
  }
}));

export const LeagueCreate = () => {
  const classes = useStyles();
  const [formPage, updateFormPage] = useState(0);
  const [leagueState, updateLeagueState] = useState({
    name: "",
    type: "",
    weeks: "",
    "start-date": null
  });
  const [activityState, updateActivityState] = useState([]);
  const [bonusState, updateBonusState] = useState([]);

  const pages = [
    <LeagueInfo leagueState={leagueState} updateLeagueState={updateLeagueState} />,
    <ActivityPage activityState={activityState} updateActivityState={updateActivityState} />,
    <BonusPage bonusState={bonusState} updateBonusState={updateBonusState} />
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
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Create New League
        </Typography>
        <form className={classes.form} noValidate>
          {pages[formPage]}
          <Grid>
            <ButtonGroup fullWidth>
              <Button
                variant="contained"
                color="primary"
                disabled={firstPage}
                className={classes.button}
                onClick={previousPage}
              >
                <ChevronLeftIcon className={classes.icon} />
                Previous
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={lastPage ? () => {} : nextPage}
              >
                {lastPage ? <span>Submit</span> : <span>Next</span>}
                <ChevronRightIcon className={classes.icon} />
              </Button>
            </ButtonGroup>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
