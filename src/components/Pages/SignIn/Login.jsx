import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Link as RouterLink } from "react-router-dom";
import SignInForm from "../../forms/SignInForm";
import { TopContainer, PaddingContainer } from "../../layout";
import { useForm } from "../../../utils";

export const Login = () => {
  const formState = {
    email: "",
    password: "",
    remember: false
  };

  const { values, handleInputChange, handleSubmit } = useForm(formState, () => {});

  const submitForm = () => {
    fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => console.log("SUCCESS", res))
      .catch(err => console.log("ERROR:", err));
  };

  const BottomForm = () => (
    <Grid container>
      <Grid item xs>
        <Link component={RouterLink} to="/login/identity">
          Forgot password?
        </Link>
      </Grid>
      <Grid item>
        <Link component={RouterLink} to="/signup">
          Don't have an account? Sign up
        </Link>
      </Grid>
    </Grid>
  );

  return (
    <Container component="main" maxWidth="xs">
      <TopContainer spacing={10}>
        <PaddingContainer paper center>
          <SignInForm
            formHeader="Sign In"
            submitText="Sign In"
            bottomForm={BottomForm}
            submitHandler={handleSubmit(submitForm)}
          >
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
          </SignInForm>
        </PaddingContainer>
      </TopContainer>
    </Container>
  );
};
