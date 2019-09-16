import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import FormHeader from "./FormHeader";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const SignInForm = ({
  formHeader,
  children,
  submitText,
  submitHandler,
  bottomForm: BottomForm = null
}) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Avatar className={classes.avatar}>
        <FitnessCenterIcon />
      </Avatar>
      {formHeader && (
        <FormHeader variant="h5" component="h1">
          {formHeader}
        </FormHeader>
      )}
      <form
        className={classes.form}
        noValidate
        onSubmit={e => {
          e.preventDefault();
          submitHandler();
        }}
      >
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
      </form>
    </Fragment>
  );
};

export default SignInForm;
