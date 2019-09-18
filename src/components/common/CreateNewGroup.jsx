import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { CardContainer } from "../common";

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(2)
  }
}));

const CreateNewGroup = props => {
  const classes = useStyles();
  const { routeUrl, text, createBtnText } = props;
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <CardContainer>
          <Typography variant="body1">{text}</Typography>
          <Button
            component={Link}
            to={routeUrl}
            className={classes.button}
            variant="contained"
            color="primary"
          >
            {createBtnText}
          </Button>
        </CardContainer>
      </Grid>
    </Grid>
  );
};

export default CreateNewGroup;
