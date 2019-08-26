import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link as RouterLink } from "react-router-dom";
import SignInForm from "../../forms/SignInForm";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  }
}));

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
  const classes = useStyles();

  const [emailState, updateEmailState] = useState("");

  const handleChange = e => {
    updateEmailState(e.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
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
      </div>
    </Container>
  );
};
