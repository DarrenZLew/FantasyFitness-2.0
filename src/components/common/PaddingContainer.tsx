import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

interface IProps {
  paper?: boolean;
  center?: boolean;
  children: React.ReactElement | React.ReactElement[];
}

// Hack due to Typescript bugginess
const useStylesWithCenter = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(4)
  }
}));

export const PaddingContainer: React.FC<IProps> = ({ children, paper, center }) => {
  const classes = useStyles({});
  const classesWithCenter = useStylesWithCenter({});
  const classToUse = center ? classesWithCenter : classes;

  if (paper) {
    return <Paper className={classToUse.root}>{children}</Paper>;
  }
  return <div className={classToUse.root}>{children}</div>;
};

export default PaddingContainer;
