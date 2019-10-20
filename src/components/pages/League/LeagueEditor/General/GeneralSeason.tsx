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
import { useForm, fetching, useLeagueValue } from "../../../../../utils";
import { TableGrid } from "../../../../common";

const GeneralSeason: React.SFC = () => {
  const { leagueId } = useLeagueValue();
  const useFormProps = {
    url: `http://localhost:5000/leagues/${leagueId}/seasons`,
    initialState: {
      weeks_number: 0,
      start_date: ""
    },
    onMount: true
  };

  const { values = {}, setValues, loading, fetchResponse } = useForm({
    ...useFormProps
  });

  const seasonDisplayItems = [
    {
      header: "Number of Weeks in Season",
      value: values.weeks_number || 0
    },
    {
      header: "Start Date",
      value: (values.start_date || "-").toString()
    }
  ];

  const toggleSeasonActivate = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const url = values.disabled
      ? `http://localhost:5000/leagues/${leagueId}/seasons/activate`
      : `http://localhost:5000/leagues/${leagueId}/seasons/deactivate`;
    e.preventDefault();
    const response = await fetching({ url, method: "POST" });
    if (response.status === "success") {
      setValues({ ...values, disabled: !values.disabled });
    }
  };

  return (
    <Card>
      <CardHeader title="Season" />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <TableGrid items={seasonDisplayItems} />
        </Grid>
      </CardContent>
      <CardActions>
        <Button color="primary" variant="contained" onClick={toggleSeasonActivate}>
          {values.disabled ? "Start Season" : "Stop Season"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default GeneralSeason;
