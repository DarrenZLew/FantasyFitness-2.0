import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { FormContainer } from "../../../forms";
import { ButtonTwoGroup, ToastContainer } from "../../../common";
import { useForm, useRedirect } from "../../../../utils";
import { authContext } from "../../../../context";

const LeagueInfo = () => {
  const initialState = {
    name: "",
    type: ""
  };

  const { auth } = useContext(authContext);
  const { id: member_id } = auth;
  const url = "http://localhost:5000/leagues";
  const extraQueryParams = { member_id };
  const { values, handleInputChange, handleSubmit, fetchResponse, loading } = useForm({
    initialState,
    url,
    extraQueryParams
  });

  const { status: fetchStatus, message: fetchMessage } = fetchResponse;
  const redirect = useRedirect({ redirectLogic: fetchStatus === "success", delay: 2000 });

  const formHeader = "Fill in information about your league";
  const disabledSubmit = Object.values(values).some(item => !item);

  const leagueHomePage = { pathname: "/league", type: "home" };

  if (redirect) {
    return <Redirect to={leagueHomePage} />;
  }
  const ButtonComponent = () => {
    return (
      <ButtonTwoGroup
        leftBtn={{
          component: Link,
          to: leagueHomePage,
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
      <ToastContainer open={fetchStatus} message={fetchMessage} status={fetchStatus} />
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
