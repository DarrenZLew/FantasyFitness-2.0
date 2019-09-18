import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { FormHeader } from ".";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

const SignInForm = ({ formHeader, children, submitText, bottomForm: BottomForm = null }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Avatar className={classes.avatar}>
        <FitnessCenterIcon />
      </Avatar>
      {formHeader && (
        <FormHeader variant="h5" component="h1">
          {formHeader}
        </FormHeader>
      )}
      {children}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        {submitText}
      </Button>
      <BottomForm />
    </div>
  );
};

export default SignInForm;
