import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

interface IProps {
  paper?: boolean;
  center?: boolean;
  children: React.ReactElement | React.ReactElement[];
}

// const useStyles = makeStyles((theme: Theme) => ({
//   root: props => {
//     const defaultCSS = { padding: theme.spacing(4) };
//     const CSS = props.center
//       ? { ...defaultCSS, display: "flex", flexDirection: "column", alignItems: "center" }
//       : { ...defaultCSS };
//     return CSS;
//   }
// }));

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

export const PaddingContainer: React.FC<IProps> = ({ children, paper, center }) => {
  const classes = useStyles({ center });
  if (paper) {
    return <Paper className={classes.root}>{children}</Paper>;
  }
  return <div className={classes.root}>{children}</div>;
};

export default PaddingContainer;
