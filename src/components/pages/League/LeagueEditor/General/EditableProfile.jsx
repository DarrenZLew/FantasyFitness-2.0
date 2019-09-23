import React from "react";
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import { useForm } from "../../../../../utils";
import { FormContainer } from "../../../../forms";

const EditableProfile = ({ data, leagueId }) => {
  const initialState = { name: data.name || "", type: data.type || "" };
  const url = `http://localhost:5000/league/${leagueId}`;
  const { values, handleInputChange, handleSubmit, loading, fetchResponse } = useForm({
    initialState,
    url
  });

  const formProps = {
    type: "edit"
  }

  return (
    <FormContainer type="signin" handleSubmit={handleSubmit} loading={loading} {...formProps}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="League Name"
          margin="dense"
          name="name"
          onChange={handleInputChange("name")}
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
          onChange={handleInputChange("type")}
          value={values.type}
          variant="outlined"
        />
      </Grid>
      {/* <Grid item xs={12}>
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
      </Grid> */}
      {/* <Grid item xs={12}>
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
      </Grid> */}
    </FormContainer>
  );
};

export default EditableProfile