import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import GeneralAvatar from "./GeneralAvatar";
import GeneralProfile from "./GeneralProfile";
import GeneralSeason from "./GeneralSeason";
import { useForm, useLeagueValue } from "../../../../../utils";
import { LoadingContainer, CardContainer } from "../../../../common";

export const General: React.FC = () => {
  const { leagueId } = useLeagueValue();
  const leagueUrl = `http://localhost:5000/leagues/${leagueId}`;
  let { values: leagueData = {}, loading } = useForm({ url: leagueUrl, onMount: true });
  if (loading) {
    return (
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <CardContainer center>
            <LoadingContainer loading={loading} />
          </CardContainer>
        </Grid>
      </Grid>
    );
  }
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <GeneralAvatar data={leagueData} />
        </Grid>
        <Grid item xs={12}>
          <GeneralProfile data={leagueData} />
        </Grid>
        <Grid item xs={12}>
          <GeneralSeason />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default General;
