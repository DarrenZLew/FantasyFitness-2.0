import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  CardActions,
  Button
} from "@material-ui/core";
import EditableProfile from "./EditableProfile";
import { TableGrid } from "../../../../common";
import { IGeneralProps } from "../../../../../types";

const GeneralProfile: React.FC<IGeneralProps> = props => {
  const [editable, toggleEdit] = useState(false);

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    toggleEdit(!editable);
  };

  const leagueDisplayItems = [
    {
      header: "League Name",
      value: props.data.name
    },
    {
      header: "League Type",
      value: props.data.type
    }
  ];

  return (
    <Card>
      <CardHeader title="Profile" />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          {!editable ? <TableGrid items={leagueDisplayItems} /> : <EditableProfile {...props} />}
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
