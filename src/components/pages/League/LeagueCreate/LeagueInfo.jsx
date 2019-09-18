import React from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { FormContainer } from "../../../forms";
import { ButtonTwoGroup } from "../../../layout";
import { useForm } from "../../../../utils";

const LeagueInfo = () => {
  const initialState = {
    name: "",
    type: ""
  };

  const url = "http://localhost:5000/league";
  const { values, handleInputChange, handleSubmit, fetchState } = useForm(
    initialState,
    url,
    () => {}
  );
  const { loading } = fetchState;

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

  const formProps = {
    formHeader: formHeader,
    ButtonComponent: ButtonComponent
  };

  return (
    <FormContainer type="edit" {...formProps} loading={loading} handleSubmit={handleSubmit}>
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
    </FormContainer>
  );
};

export default LeagueInfo;
