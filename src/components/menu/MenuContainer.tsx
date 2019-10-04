import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, AppBar, Toolbar, Typography, Divider, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Hidden from "@material-ui/core/Hidden";
import { MenuRouteList } from "./MenuRouteList";
import routeItems from "./menuRouteItems";

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexGrow: 1
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    minHeight: "64px"
  },
  menuButton: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  appBarToolBar: {
    minHeight: "64px"
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1
  }
}));

export const MenuContainer: React.FunctionComponent<{
  children: React.ReactElement;
  hasMenu: boolean;
}> = ({ children, hasMenu }) => {
  const classes = useStyles({});
  const [drawerOpen, setDrawerOpen] = useState(false);

  function handleDrawerOpen() {
    setDrawerOpen(true);
  }

  function handleDrawerClose() {
    setDrawerOpen(false);
  }

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose} className={classes.menuButton}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <MenuRouteList listItems={routeItems.menu} />
      <Divider />
      <MenuRouteList listItems={routeItems.account} />
    </div>
  );

  if (!hasMenu) {
    return children;
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.appBarToolBar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Fantasy Fitness</Typography>
        </Toolbar>
      </AppBar>
      <nav area-label="mailbox filters" className={classes.drawer}>
        <Hidden smUp implementation="js">
          <Drawer
            variant="temporary"
            open={drawerOpen}
            onClose={handleDrawerClose}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="js">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>{children ? children : null}</main>
    </div>
  );
};

export default MenuContainer;
