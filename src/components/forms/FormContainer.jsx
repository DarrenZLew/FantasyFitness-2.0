import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SignInForm, EditForm } from ".";
import { LoadingContainer } from "../layout";

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  }
}));

const FormContainer = ({ handleSubmit, loading, type, children, ...rest }) => {
  const formComponents = {
    signin: SignInForm,
    edit: EditForm
  };
  const classes = useStyles();
  const FormComponent = formComponents[type];
  return (
    <LoadingContainer loading={loading}>
      <form
        className={classes.form}
        noValidate
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <FormComponent {...rest}>{children}</FormComponent>
      </form>
    </LoadingContainer>
  );
};

export default FormContainer;
