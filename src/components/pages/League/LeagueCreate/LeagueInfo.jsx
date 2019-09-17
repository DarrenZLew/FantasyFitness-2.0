import React from "react";
import TextField from "@material-ui/core/TextField";
import EditForm from "../../../forms/EditForm";
import { ButtonTwoGroup } from "../../../layout";
import { Link } from "react-router-dom";

const LeagueInfo = ({ values, handleInputChange, handleSubmit }) => {
  const formHeader = "Fill in information about your league";
  const disabledSubmit = Object.values(values).some(item => !item);
  const ButtonComponent = () => {
    return (
      <ButtonTwoGroup
        leftBtn={{
          component: Link,
          to: {
            pathname: "/league",
            type: "home"
          },
          content: "Go Back"
        }}
        rightBtn={{
          type: "submit",
          content: "Create League",
          disabled: disabledSubmit
        }}
      />
    );
  };

  return (
    <EditForm formHeader={formHeader} ButtonComponent={ButtonComponent} handleSubmit={handleSubmit}>
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
        value={values.name}
        onChange={handleInputChange("name")}
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
        value={values.type}
        onChange={handleInputChange("type")}
      />
    </EditForm>
  );
};

export default LeagueInfo;
