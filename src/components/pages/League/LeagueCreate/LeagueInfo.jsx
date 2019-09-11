import React from "react";
import TextField from "@material-ui/core/TextField";
import CreateForm from "../../../forms/CreateForm";

const LeagueInfo = ({ leagueState, updateLeagueState }) => {
  const handleChange = e => {
    let newValue = e.target.value;
    if (e.target.type === "number" && (newValue < 0 || Number.isInteger(newValue))) {
      newValue = 0;
    }
    updateLeagueState({ ...leagueState, [e.target.name]: [newValue] });
  };

  const formHeader = "Fill in information about your league";

  return (
    <CreateForm formHeader={formHeader}>
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
    </CreateForm>
  );
};

export default LeagueInfo;
