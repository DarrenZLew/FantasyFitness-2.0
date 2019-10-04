import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { IFormContainerProps } from "../../types";

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    fontSize: 25,
    marginRight: theme.spacing(1)
  }
}));

const AddItem: React.FC<IFormContainerProps> = ({ addItem, children }) => {
  const classes = useStyles({});
  return (
    <ButtonGroup>
      <Button onClick={addItem}>
        <AddCircleIcon className={classes.icon} />
        {children}
      </Button>
    </ButtonGroup>
  );
};

export default AddItem;
