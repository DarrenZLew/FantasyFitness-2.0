import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
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

export const Login = () => {
  const classes = useStyles();
  const [loginState, updateLoginState] = useState({
    email: "",
    password: "",
    remember: false
  });

  const handleChange = name => e => {
    const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    updateLoginState({ ...loginState, [name]: newValue });
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
      <div className={classes.paper}>
        <SignInForm formHeader="Sign In" submitText="Sign In" bottomForm={BottomForm}>
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
              onChange={handleChange("email")}
              value={loginState.email}
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
              onChange={handleChange("password")}
              value={loginState.password}
            />
            <FormControlLabel
              control={
                <Checkbox
                  value={loginState.remember}
                  checked={loginState.remember}
                  onChange={handleChange("remember")}
                  color="primary"
                />
              }
              label="Remember me"
            />
          </Grid>
        </SignInForm>
      </div>
    </Container>
  );
};
