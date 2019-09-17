import React from "react";
import Grid from "@material-ui/core/Grid";
import AddItem from "./AddItem";
import FormHeader from "./FormHeader";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  }
}));

const EditForm = ({
  formHeader,
  children,
  addItem,
  addItemText,
  ButtonComponent,
  handleSubmit = () => {}
}) => {
  const classes = useStyles();
  return (
    <form
      className={classes.form}
      noValidate
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      {formHeader && <FormHeader variant="subtitle1">{formHeader}</FormHeader>}
      <Grid container>{children}</Grid>
      {addItem && <AddItem addItemHandler={addItem}>{addItemText}</AddItem>}
      {ButtonComponent && <ButtonComponent />}
    </form>
  );
};

export default EditForm;
