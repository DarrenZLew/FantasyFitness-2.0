import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";

import AddItem from "./AddItem";
import FormHeader from "./FormHeader";

const LeagueForm = ({ formHeader, children, addItem, addItemText }) => {
  return (
    <Fragment>
      {formHeader && <FormHeader variant="subtitle1">{formHeader}</FormHeader>}
      <Grid container>{children}</Grid>
      {addItem && <AddItem addItemHandler={addItem}>{addItemText}</AddItem>}
    </Fragment>
  );
};

export default LeagueForm;
