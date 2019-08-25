import React from "react";
import { makeStyles } from "@material-ui/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const useStyles = makeStyles(theme => ({
  icon: {
    fontSize: 25,
    marginRight: theme.spacing(1)
  }
}));

const AddItem = ({ addItemHandler, children }) => {
  const classes = useStyles();
  return (
    <ButtonGroup>
      <Button onClick={addItemHandler}>
        <AddCircleIcon className={classes.icon} />
        {children}
      </Button>
    </ButtonGroup>
  );
};

export default AddItem;
