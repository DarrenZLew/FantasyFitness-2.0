import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: (props: any) => ({
    marginTop: theme.spacing(props.spacing || 8)
  })
}));

export const TopContainer: React.FC<{
  children?: React.ReactElement | React.ReactElement[];
  spacing?: number;
}> = ({ children, spacing }) => {
  const classes = useStyles({ spacing });
  return <div className={classes.root}>{children}</div>;
};

export default TopContainer;
