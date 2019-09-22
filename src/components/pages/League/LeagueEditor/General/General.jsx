import React, { Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
import GeneralProfile from "./GeneralProfile";
import GeneralAvatar from "./GeneralAvatar";

export const General = props => {
  const [editable, setEdit] = useState(false);

  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item lg={4} md={12} xl={4} xs={12}>
          <GeneralAvatar edit={editable} />
        </Grid>
        <Grid item lg={8} md={12} xl={8} xs={12}>
          <GeneralProfile edit={editable} />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default General;
