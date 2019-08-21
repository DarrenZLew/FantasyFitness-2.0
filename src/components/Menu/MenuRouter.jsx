import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

import MenuButton from "./MenuButton";
import routeItems from "./menuRouteItems";

// import Switch from "@material-ui/core/Switch";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormGroup from "@material-ui/core/FormGroup";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}));

export const MenuRouter = () => {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);

  //   function handleChange(event) {
  //     setAuth(event.target.checked);
  //   }

  return (
    <div className={classes.root}>
      {/* <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? "Logout" : "Login"}
        />
      </FormGroup> */}
      <AppBar position="static">
        <Toolbar>
          <MenuButton iconType={MenuIcon} items={routeItems.menu} />
          <Typography variant="h6" className={classes.title}>
            Fantasy Fitness
          </Typography>
          {auth && <MenuButton iconType={AccountCircle} items={routeItems.account} />}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MenuRouter;
