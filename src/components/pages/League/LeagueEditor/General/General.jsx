import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import GeneralProfile from "./GeneralProfile";
import GeneralAvatar from "./GeneralAvatar";
import { useFetch } from "../../../../../utils";
import { LoadingContainer } from "../../../../common"

const useStyles = makeStyles(theme => ({
  loading: {
    display: "flex",
    justifyContent: "center"
  }
}));

export const General = ({ leagueId }) => {
  const classes = useStyles()
  const leagueUrl = `http://localhost:5000/league/${leagueId}`;
  let { response: { value: leagueData = {} } = {}, error, loading } = useFetch({ url: leagueUrl })
  if (loading) {
    return (
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Card>
            <CardContent className={classes.loading}>
              <LoadingContainer loading={loading} center />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item lg={4} md={12} xl={4} xs={12}>
          <GeneralAvatar data={leagueData} leagueId={leagueId} />
        </Grid>
        <Grid item lg={8} md={12} xl={8} xs={12}>
          <GeneralProfile data={leagueData} leagueId={leagueId} />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default General;
