import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent"

const Season = () => {
  return (
    <Grid container spacing={4}>
    <Grid item lg={4} md={12} xl={4} xs={12}>
      <Card>
        <CardContent>
      <Typography variant="body1"> 
        Current season has not started yet
      </Typography>
      <Button variant="contained" color="primary">Create New Season</Button>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
  )
}

export default Season