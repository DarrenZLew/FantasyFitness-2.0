import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { AddItem, FormHeader } from ".";

const EditForm = ({ formHeader, children, addItem, addItemText, ButtonComponent }) => {
  return (
    <Fragment>
      {formHeader && <FormHeader variant="subtitle1">{formHeader}</FormHeader>}
      <Grid container>{children}</Grid>
      {addItem && <AddItem addItemHandler={addItem}>{addItemText}</AddItem>}
      {ButtonComponent && <ButtonComponent />}
    </Fragment>
  );
};

export default EditForm;
