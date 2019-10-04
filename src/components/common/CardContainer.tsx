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

const CardContainer: React.FC<{
  children: React.ReactElement | React.ReactElement[];
  center?: boolean;
}> = ({ children, center }) => {
  const classes = useStyles({});
  return (
    <Card className={center ? classes.center : ""}>
      <CardContent style={{ width: "100%" }} className={center ? classes.center : ""}>
        {children}
      </CardContent>
    </Card>
  );
};

export default CardContainer;
