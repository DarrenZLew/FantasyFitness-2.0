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
        Know your password? Sign in
      </Link>
    </Grid>
  </Grid>
);

export const ForgotPassword = () => {
  const [emailState, updateEmailState] = useState("");

  const handleChange = e => {
    updateEmailState(e.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <TopContainer spacing={10}>
        <PaddingContainer paper center>
          <SignInForm
            formHeader="Forget Your Password?"
            submitText="Reset Password"
            bottomForm={BottomForm}
          >
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
              onChange={handleChange}
              value={emailState}
            />
          </SignInForm>
        </PaddingContainer>
      </TopContainer>
    </Container>
  );
};
