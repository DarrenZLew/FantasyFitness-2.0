import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { AddItem, FormHeader } from ".";
import { IFormContainerProps } from "../../types";

const EditForm: React.FC<IFormContainerProps> = ({
  formHeader,
  children,
  addItem,
  addItemText,
  ButtonComponent
}) => {
  return (
    <Fragment>
      {formHeader && <FormHeader variant="subtitle1">{formHeader}</FormHeader>}
      <Grid container>{children}</Grid>
      <Grid item xs={12}>
        {addItem && <AddItem addItem={addItem}>{addItemText}</AddItem>}
      </Grid>
      <Grid item xs={12}>
        {ButtonComponent && <ButtonComponent />}
      </Grid>
    </Fragment>
  );
};

export default EditForm;
