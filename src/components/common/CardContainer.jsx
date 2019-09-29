import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles(theme => ({
  center: {
    display: "flex",
    justifyContent: "center"
  }
}));

const CardContainer = ({ children, center }) => {
  const classes = useStyles();
  return (
    <Card className={center ? classes.center : ""}>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default CardContainer;
