import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  CardActions,
  Button,
} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import DisplayProfile from "./DisplayProfile"
import EditableProfile from "./EditableProfile"

const GeneralProfile = props => {
  const [editable, toggleEdit] = useState(false);

  const handleEdit = e => {
    toggleEdit(!editable);
  };

  return (
    <Card>
      <CardHeader title="Profile" />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          {!editable ? <DisplayProfile {...props} /> : <EditableProfile {...props} />}
        </Grid>
      </CardContent>
      <CardActions>
        <Button color="primary" variant="contained" onClick={handleEdit}>
          {!editable ? "Edit" : "Save"} details
        </Button>
      </CardActions>
    </Card>
  );
};

export default GeneralProfile;
