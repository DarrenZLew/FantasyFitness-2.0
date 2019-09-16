import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(2, 1, 2)
  },
  icon: {
    fontSize: 25
  }
}));

const ButtonTwoGroup = ({ leftBtn, rightBtn }) => {
  const classes = useStyles();
  return(
  <Grid>
  <ButtonGroup fullWidth>
    <Button
      variant="contained"
      color="primary"
      disabled={leftBtn.disabled}
      className={classes.button}
      onClick={leftBtn.onClick}
    >
      <ChevronLeftIcon className={classes.icon} />
      {leftBtn.text}
    </Button>
    <Button
      variant="contained"
      disabled={rightBtn.disabled}
      color="primary"
      className={classes.button}
      onClick={rightBtn.onClick}
    >
      {rightBtn.text}
      <ChevronRightIcon className={classes.icon} />
    </Button>
  </ButtonGroup>
</Grid>
)}

export default ButtonTwoGroup