import React from "react";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: props => {
    const defaultCSS = { padding: theme.spacing(4) };
    const CSS = props.center
      ? { ...defaultCSS, display: "flex", flexDirection: "column", alignItems: "center" }
      : { ...defaultCSS };
    return CSS;
  }
}));

export const PaddingContainer = ({ children, paper, center }) => {
  const classes = useStyles({ center });
  if (paper) {
    return <Paper className={classes.root}>{children}</Paper>;
  }
  return <div className={classes.root}>{children}</div>;
};

export default PaddingContainer;
