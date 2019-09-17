import React from "react";
import TextField from "@material-ui/core/TextField";
import { KeyboardDatePicker } from "@material-ui/pickers";
import EditForm from "../../../forms/EditForm";

const SeasonInfo = ({ seasonState, updateSeasonState }) => {
  const handleChange = e => {
    let newValue = e.target.value;
    if (e.target.type === "number" && (newValue < 0 || Number.isInteger(newValue))) {
      newValue = 0;
    }
    updateSeasonState({ ...seasonState, [e.target.name]: [newValue] });
  };

  const handleDateChange = (name, date) => {
    updateSeasonState({ ...seasonState, [name]: date });
  };

  const formHeader = "Fill in information about your season";

  return (
    <EditForm formHeader={formHeader}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="weeks"
        label="Number of Weeks in Season"
        id="weeks"
        type="number"
        value={seasonState.weeks}
        onChange={handleChange}
        inputProps={{ min: "0", steps: "1" }}
      />
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
        value={seasonState["start-date"]}
        onChange={date => handleDateChange("start-date", date)}
      />
    </EditForm>
  );
};

export default SeasonInfo;
