import React, { useContext } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Activities from "./Activities";
import Bonuses from "./Bonuses";
import {
  useLeagueValue,
  useScoreForm,
  useAuthValue,
  useSeasonValue,
  convertFromUTC
} from "../../../utils";

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`score-form-tabpanel-${index}`}
      aria-labelledby={`score-form-tab-${index}`}
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

function a11yProps(index: number) {
  return {
    id: `score-form-tab-${index}`,
    "aria-controls": `score-form-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

export const Score = (props: any) => {
  const classes = useStyles({});
  const [value, setValue] = React.useState(0);
  const { auth } = useAuthValue();
  const { id: member_id } = auth;
  const { leagueId } = useLeagueValue();
  const extraBodyParams = { member_id };
  const {
    seasonValues: {
      values: { id: season_id, start_date },
      activeWeekNumber,
      activeWeekRange,
      activeWeekId
    }
  } = useSeasonValue();
  const useScoreFormProps = {
    url: `http://localhost:5000/leagues/${leagueId}/seasons/${season_id}/weeks/${activeWeekId}/activities`,
    updateFormValues: true,
    onMount: true,
    extraBodyParams
  };

  const { values = [], handleSubmit, loading, fetchResponse } = useScoreForm({
    ...useScoreFormProps
  });
  // function handleChange(event, newValue) {
  //   setValue(newValue);
  // }

  function handleChangeIndex(index: number) {
    setValue(index);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          // onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="score-form-tabs"
        >
          <Tab label="Activities" {...a11yProps(0)} />
          <Tab label="Bonuses" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <div>Week {activeWeekNumber}</div>
      <div>{activeWeekRange}</div>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0}>
          <Activities activities={values} handleSubmit={handleSubmit} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Bonuses />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};
