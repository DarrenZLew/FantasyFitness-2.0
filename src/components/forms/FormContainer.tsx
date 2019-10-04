import React from "react";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SignInForm, EditForm } from ".";
import { LoadingContainer } from "../common";
import { hasKey } from "../../utils";
import { IFormContainerProps } from "../../types";

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  }
}));

const FormContainer: React.FC<IFormContainerProps> = ({
  handleSubmit,
  loading,
  type,
  children,
  ...rest
}) => {
  const formComponents = {
    signin: SignInForm,
    edit: EditForm
  };
  const classes = useStyles({});
  const FormComponent: React.FC<IFormContainerProps | any> = hasKey(formComponents, type)
    ? formComponents[type]
    : null;
  return (
    <LoadingContainer loading={loading}>
      <form
        className={classes.form}
        noValidate
        onSubmit={e => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <FormComponent handleSubmit={handleSubmit} type={type} {...rest}>
          {children}
        </FormComponent>
      </form>
    </LoadingContainer>
  );
};

export default FormContainer;
