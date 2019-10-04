import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button, { ButtonProps } from "@material-ui/core/Button";
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

interface IButtonTwoGroupProps {
  leftBtn: any;
  rightBtn: any;
}

const ButtonTwoGroup: React.FC<IButtonTwoGroupProps> = ({ leftBtn, rightBtn }) => {
  const classes = useStyles({});
  return (
    <Grid>
      <ButtonGroup fullWidth>
        <Button variant="contained" color="primary" {...leftBtn} className={classes.button}>
          <ChevronLeftIcon className={classes.icon} />
          {leftBtn.content}
        </Button>
        <Button variant="contained" color="primary" className={classes.button} {...rightBtn}>
          {rightBtn.content}
          <ChevronRightIcon className={classes.icon} />
        </Button>
      </ButtonGroup>
    </Grid>
  );
};

export default ButtonTwoGroup;
