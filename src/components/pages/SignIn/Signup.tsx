import React from "react";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Link as RouterLink, Redirect } from "react-router-dom";
import { FormContainer } from "../../forms";
import { useForm, useRedirect } from "../../../utils";
import { TopContainer, PaddingContainer, ToastContainer } from "../../common";

const BottomForm = () => (
  <Grid container justify="flex-end">
    <Grid item>
      <Link component={RouterLink} to="/login">
        Already have an account? Sign in
      </Link>
    </Grid>
  </Grid>
);

export const Signup: React.FC = () => {
  const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  };

  const url = "http://localhost:5000/auth/signup";
  const { values, handleInputChange, handleSubmit, loading, fetchResponse } = useForm({
    initialState,
    url
  });
  const { status: fetchStatus, value: fetchValue, message: fetchMessage } = fetchResponse;
  const redirect = useRedirect({ redirectLogic: fetchStatus === "success", delay: 2000 });
  const formProps = {
    formHeader: "Sign Up",
    submitText: "Sign Up",
    bottomForm: BottomForm
  };

  if (redirect) {
    return <Redirect to="/login" />;
  }
  return (
    <Container component="main" maxWidth="xs">
      <TopContainer spacing={10}>
        <PaddingContainer paper center>
          <FormContainer type="signin" handleSubmit={handleSubmit} loading={loading} {...formProps}>
            <ToastContainer open={fetchStatus} message={fetchMessage} status={fetchStatus} />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="first_name"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  margin="normal"
                  onChange={handleInputChange("first_name")}
                  value={values.first_name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="last_name"
                  margin="normal"
                  onChange={handleInputChange("last_name")}
                  value={values.last_name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleInputChange("email")}
                  value={values.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
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
              </Grid>
            </Grid>
          </FormContainer>
        </PaddingContainer>
      </TopContainer>
    </Container>
  );
};
