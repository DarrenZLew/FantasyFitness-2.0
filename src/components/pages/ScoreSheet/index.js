import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import WeeklyTab from "./WeeklyTab";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(8),
    display: "flex",
    justifyContent: "center"
  }
}));

const dailyScoreSheets = [{}, {}, {}, {}, {}, {}, {}, {}];

export const ScoreSheet = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <WeeklyTab dailyScoreSheets={dailyScoreSheets} />
    </div>
  );
};

export default ScoreSheet;
