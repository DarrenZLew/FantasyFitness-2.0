import React from "react";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Link as RouterLink } from "react-router-dom";
import { FormContainer } from "../../forms";
import { TopContainer, PaddingContainer } from "../../common";
import { useForm } from "../../../utils";

const BottomForm = () => (
  <Grid container justify="flex-end">
    <Grid item>
      <Link component={RouterLink} to="/login">
        Know your password? Sign in
      </Link>
    </Grid>
  </Grid>
);

export const ForgotPassword: React.FC = () => {
  const initialState = {
    email: ""
  };

  // NOTE: Design URL for password reset
  const url = "";
  const { values, handleInputChange, handleSubmit, loading, fetchResponse } = useForm({
    initialState,
    url
  });
  const { status: fetchStatus, message: fetchMessage } = fetchResponse;

  const formProps = {
    formHeader: "Forget Your Password?",
    submitText: "Reset Password",
    bottomForm: BottomForm
  };

  return (
    <Container component="main" maxWidth="xs">
      <TopContainer spacing={10}>
        <PaddingContainer paper center>
          <FormContainer type="signin" handleSubmit={handleSubmit} loading={loading} {...formProps}>
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
          </FormContainer>
        </PaddingContainer>
      </TopContainer>
    </Container>
  );
};
