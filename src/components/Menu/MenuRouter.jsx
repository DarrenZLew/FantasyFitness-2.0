import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

import MenuButton from "./MenuButton";
import routeItems from "./menuRouteItems";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}));

export const MenuRouter = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <MenuButton iconType={MenuIcon} items={routeItems.menu} />
          <Typography variant="h6" className={classes.title}>
            Fantasy Fitness
          </Typography>
          <MenuButton iconType={AccountCircle} items={routeItems.account} />
        </Toolbar>
      </AppBar>
      {props.children ? props.children : null}
    </div>
  );
};

export default MenuRouter;
