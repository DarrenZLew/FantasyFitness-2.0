import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import DailyScoreSheet from "./DailyScoreSheet";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`weekly-tab-tabpanel-${index}`}
      aria-labelledby={`weekly-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `weekly-tab-${index}`,
    "aria-controls": `weekly-tab-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    minWidth: 500
  }
}));

export default function WeeklyTab(props) {
  const classes = useStyles();
  const defaultValue = props.currWeek || 4;
  const [value, setValue] = React.useState(defaultValue);
  const { dailyScoreSheets = [] } = props;

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="weekly-tab"
        >
          {dailyScoreSheets.map((scoreSheet, index) => (
            <Tab label={`Score Sheet ${index + 1}`} {...a11yProps(index)} disabled={index > 4} />
          ))}
        </Tabs>
      </AppBar>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        {dailyScoreSheets.map((scoreSheet, index) => (
          <TabPanel value={value} index={index} key={index}>
            <DailyScoreSheet title={`Score Sheet ${index + 1}`} />
          </TabPanel>
        ))}
      </SwipeableViews>
    </div>
  );
}
