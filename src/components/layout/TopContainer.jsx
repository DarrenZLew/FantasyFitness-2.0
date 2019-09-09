import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: props => ({
    marginTop: theme.spacing(props.spacing || 8)
  })
}));

export const TopContainer = ({ children, spacing }) => {
  const props = { spacing };
  const classes = useStyles(props);
  return <div className={classes.root}>{children}</div>;
};

export default TopContainer;
