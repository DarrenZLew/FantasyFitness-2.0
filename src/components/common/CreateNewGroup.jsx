import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const CreateNewGroup = props => {
  const { routeUrl, createBtnText } = props;
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Button
          component={Link}
          to={routeUrl}
          variant="contained"
          color="primary"
        >
          {createBtnText}
        </Button>
      </Grid>
    </Grid>
  );
};

export default CreateNewGroup;
