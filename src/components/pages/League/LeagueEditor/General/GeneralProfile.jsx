import React, { Fragment, useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  CardActions,
  Button,
  TextField
} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { TableGrid } from "../../../../layout";

const items = [
  {
    header: "League Name",
    value: "Fantasy Fitness League"
  },
  {
    header: "League Type"
  },
  {
    header: "Number of Weeks in Season"
  },
  {
    header: "Season Start Date"
  }
];

const NonEditableProfile = () => <TableGrid items={items} />;

const EditableProfile = ({ handleChange, handleDateChange, values }) => {
  return (
    <Fragment>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="League Name"
          margin="dense"
          name="name"
          onChange={handleChange}
          required
          value={values.name}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="League Type"
          margin="dense"
          name="type"
          onChange={handleChange}
          required
          value={values.type}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Number of Weeks in Season"
          margin="dense"
          name="weeks"
          onChange={handleChange}
          type="number"
          required
          value={values.weeks}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <KeyboardDatePicker
          disablePast
          clearable
          inputVariant="outlined"
          margin="normal"
          required
          fullWidth
          name="start-date"
          label="Starting Date of Season"
          id="start-date"
          disableToolbar
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
          format="MM/dd/yyyy"
          InputAdornmentProps={{ position: "start" }}
          value={values["start-date"]}
          onChange={date => handleDateChange("start-date", date)}
        />
      </Grid>
    </Fragment>
  );
};

const GeneralProfile = props => {
  const [editable, toggleEdit] = useState(false);
  const [values, setValues] = useState({
    name: "",
    type: "",
    weeks: "",
    "start-date": null
  });

  const handleEdit = e => {
    toggleEdit(!editable);
  };

  const handleChange = e => {
    let newValue = e.target.value;
    if (e.target.type === "number" && (newValue < 0 || Number.isInteger(newValue))) {
      newValue = 0;
    }
    setValues({
      ...values,
      [e.target.name]: [newValue]
    });
  };

  const handleDateChange = (name, date) => {
    setValues({ ...values, [name]: date });
  };

  return (
    <Card>
      <CardHeader title="Profile" />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          {!editable ? (
            <NonEditableProfile />
          ) : (
            <EditableProfile
              handleChange={handleChange}
              handleDateChange={handleDateChange}
              values={values}
            />
          )}
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
