import React from "react";
import {
  Card,
  CardHeader,
  Divider,
  CardActions,
  CardContent,
  Grid,
  Button
} from "@material-ui/core";
import { fetching, useLeagueValue, useSeasonValue } from "../../../../../utils";
import { TableGrid, LoadingContainer } from "../../../../common";

const GeneralSeason: React.SFC = () => {
  const { leagueId } = useLeagueValue();
  const {
    seasonValues: { seasonDisabled, values, initialValues, handleSetValues, loading, fetchResponse }
  } = useSeasonValue();

  const seasonDisplayItems = [
    {
      header: "Number of Weeks in Season",
      value: initialValues.weeks_number || 0
    },
    {
      header: "Start Date",
      value: (initialValues.start_date || "-").toString()
    }
  ];

  const toggleSeasonActivate = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const url = seasonDisabled
      ? `http://localhost:5000/leagues/${leagueId}/seasons/activate`
      : `http://localhost:5000/leagues/${leagueId}/seasons/deactivate`;
    e.preventDefault();
    const response = await fetching({ url, method: "POST" });
    if (response.status === "success") {
      handleSetValues({ ...values, disabled: !values.disabled });
    }
  };

  return (
    <Card>
      <CardHeader title="Season" />
      <Divider />
      <LoadingContainer loading={loading}>
        <CardContent>
          <Grid container spacing={3}>
            <TableGrid items={seasonDisplayItems} />
          </Grid>
        </CardContent>
      </LoadingContainer>
      <CardActions>
        <Button color="primary" variant="contained" onClick={toggleSeasonActivate}>
          {seasonDisabled ? "Start Season" : "Stop Season"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default GeneralSeason;
