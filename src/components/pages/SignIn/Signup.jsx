import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Link as RouterLink } from "react-router-dom";
import SignInForm from "../../forms/SignInForm";
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
  const [signupState, updateSignupState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  });

  const handleChange = name => e => {
    updateSignupState({ ...signupState, [name]: e.target.value });
  };

  const submitForm = () => {
    fetch("http://localhost:5000/auth/signup", {
      method: "POST",
      body: JSON.stringify(signupState),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => console.log("SUCCESS", res))
      .catch(err => console.log("ERROR:", err));
  };

  return (
    <Container component="main" maxWidth="xs">
      <TopContainer spacing={10}>
        <PaddingContainer paper center>
          <SignInForm
            formHeader="Sign Up"
            submitText="Sign Up"
            bottomForm={BottomForm}
            submitHandler={submitForm}
          >
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
                  onChange={handleChange("first_name")}
                  value={signupState.first_name}
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
                  onChange={handleChange("last_name")}
                  value={signupState.last_name}
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
                  onChange={handleChange("email")}
                  value={signupState.email}
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
                  onChange={handleChange("password")}
                  value={signupState.password}
                />
              </Grid>
            </Grid>
          </SignInForm>
        </PaddingContainer>
      </TopContainer>
    </Container>
  );
}
