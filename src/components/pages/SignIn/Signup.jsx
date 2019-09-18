import React from "react";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Link as RouterLink } from "react-router-dom";
import { FormContainer } from "../../forms";
import { useForm } from "../../../utils";
import { TopContainer, PaddingContainer } from "../../layout";

const BottomForm = () => (
  <Grid container justify="flex-end">
    <Grid item>
      <Link component={RouterLink} to="/login">
        Already have an account? Sign in
      </Link>
    </Grid>
  </Grid>
);

export function Signup() {
  const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  };

  const url = "http://localhost:5000/auth/signup";
  const { values, handleInputChange, handleSubmit, fetchState } = useForm(
    initialState,
    url,
    () => {}
  );
  const { loading } = fetchState;

  const formProps = {
    formHeader: "Sign Up",
    submitText: "Sign Up",
    bottomForm: BottomForm
  };

  return (
    <Container component="main" maxWidth="xs">
      <TopContainer spacing={10}>
        <PaddingContainer paper center>
          <FormContainer type="signin" handleSubmit={handleSubmit} loading={loading} {...formProps}>
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
}
