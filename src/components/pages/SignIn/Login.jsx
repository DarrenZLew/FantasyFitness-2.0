import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Link as RouterLink, Redirect } from "react-router-dom";
import { FormContainer } from "../../forms";
import { TopContainer, PaddingContainer, ToastContainer } from "../../common";
import { useForm, useRedirect } from "../../../utils";
import { authContext } from "../../../context";

const BottomForm = () => (
  <Grid container>
    <Grid item xs={6}>
      <Link component={RouterLink} to="/login/identity">
        Forgot password?
      </Link>
    </Grid>
    <Grid item xs={6}>
      <Link component={RouterLink} to="/signup">
        Don't have an account? Sign up here
      </Link>
    </Grid>
  </Grid>
);

export const Login = () => {
  const initialState = {
    email: "",
    password: "",
    remember: false
  };
  const auth = useContext(authContext);
  const successCallback = userAuthData => {
    auth.setAuthStatus({ ...userAuthData });
  };
  const url = "http://localhost:5000/auth/login";

  const { values, handleInputChange, handleSubmit, loading, fetchResponse } = useForm({
    initialState,
    url,
    successCallback
  });
  const { status: fetchStatus, value: fetchValue, message: fetchMessage } = fetchResponse;
  const redirect = useRedirect({ redirectLogic: fetchStatus === "success", delay: 4000 });
  const formProps = {
    formHeader: "Sign In",
    submitText: "Sign In",
    bottomForm: BottomForm
  };

  if (redirect) {
    return <Redirect to="/league" />;
  }
  return (
    <Container component="main" maxWidth="xs">
      <TopContainer spacing={10}>
        <PaddingContainer paper center>
          <FormContainer type="signin" handleSubmit={handleSubmit} loading={loading} {...formProps}>
            <ToastContainer open={fetchStatus} message={fetchMessage} status={fetchStatus} />
            <Grid container spacing={2}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleInputChange("email")}
                value={values.email}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleInputChange("password")}
                value={values.password}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value={values.remember}
                    checked={values.remember}
                    onChange={handleInputChange("remember")}
                    color="primary"
                  />
                }
                label="Remember me"
              />
            </Grid>
          </FormContainer>
        </PaddingContainer>
      </TopContainer>
    </Container>
  );
};
