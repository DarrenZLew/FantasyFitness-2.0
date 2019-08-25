import React from "react";
import TextField from "@material-ui/core/TextField";
import { KeyboardDatePicker } from "@material-ui/pickers";
import LeagueForm from "../../forms/LeagueForm";

const LeagueInfo = ({ leagueState, updateLeagueState }) => {
  const handleChange = e => {
    let newValue = e.target.value;
    if (e.target.type === "number" && (newValue < 0 || Number.isInteger(newValue))) {
      newValue = 0;
    }
    updateLeagueState({ ...leagueState, [e.target.name]: [newValue] });
  };

  const handleDateChange = (name, date) => {
    updateLeagueState({ ...leagueState, [name]: date });
  };

  const formHeader = "Fill in information about your league";

  return (
    <LeagueForm formHeader={formHeader}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="name"
        label="League Name"
        name="name"
        autoComplete="name"
        autoFocus
        value={leagueState.name}
        onChange={handleChange}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="type"
        label="League Type"
        id="type"
        placeholder="Ex: Fitness"
        autoComplete="type"
        value={leagueState.type}
        onChange={handleChange}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="weeks"
        label="Number of Weeks in Season"
        id="weeks"
        type="number"
        value={leagueState.weeks}
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
        value={leagueState["start-date"]}
        onChange={date => handleDateChange("start-date", date)}
      />
    </LeagueForm>
  );
};

export default LeagueInfo;
