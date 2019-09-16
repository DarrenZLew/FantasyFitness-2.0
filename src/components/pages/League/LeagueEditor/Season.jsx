import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(2)
  }
}));

const Season = props => {
  const classes = useStyles();
  const { leagueId } = props;
  const seasonPageUrl = `/league/${leagueId}/season`;
  return (
    <Grid container spacing={4}>
      <Grid item lg={4} md={12} xl={4} xs={12}>
        <Card>
          <CardContent>
            <Typography variant="body1">Current season has not started yet</Typography>
            <Button
              component={Link}
              to={seasonPageUrl}
              className={classes.button}
              variant="contained"
              color="primary"
            >
              Create New Season
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Season;
