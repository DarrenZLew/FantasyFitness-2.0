import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import GeneralProfile from "./GeneralProfile";
import GeneralAvatar from "./GeneralAvatar";
import { useForm } from "../../../../../utils";
import { LoadingContainer, CardContainer } from "../../../../common";
import { ILeagueId } from "../../../../../types";

export const General: React.FC<ILeagueId> = ({ leagueId }) => {
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
        <Grid item lg={4} md={12} xl={4} xs={12}>
          <GeneralAvatar data={leagueData} leagueId={leagueId} />
        </Grid>
        <Grid item lg={8} md={12} xl={8} xs={12}>
          <GeneralProfile data={leagueData} leagueId={leagueId} />
        </Grid>
        <Grid item lg={12} md={12} xl={12} xs={12}>
          <GeneralProfile data={leagueData} leagueId={leagueId} />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default General;
