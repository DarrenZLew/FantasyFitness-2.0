import React, { Fragment } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CreateForm from "../../../forms/CreateForm";

const useStyles = makeStyles(theme => ({
  icon: {
    fontSize: 25,
    marginRight: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const ActivityPage = ({ activityState, updateActivityState }) => {
  const classes = useStyles();

  const deleteActivity = id => e => {
    const newActivityState = [...activityState];
    newActivityState.splice(id, 1);
    updateActivityState([...newActivityState]);
  };
  const addActivity = () => {
    const newActivity = { name: "", points: "", challenge: false };
    updateActivityState([...activityState, { ...newActivity }]);
  };

  const handleActivityChange = (fieldName, id) => e => {
    const updatedActivities = [...activityState];
    const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    updatedActivities[id][fieldName] = newValue;
    updateActivityState(updatedActivities);
  };

  const formHeader = "Add your daily activities for your league";
  const addItemText = "Add new activity";

  return (
    <CreateForm formHeader={formHeader} addItem={addActivity} addItemText={addItemText}>
      {activityState.length > 0 && (
        <Grid container spacing={1}>
          {activityState.map((activity, index) => {
            const activityId = `activity-${index}`;
            const activityPointsId = `activity-points-${index}`;
            return (
              <Fragment key={index}>
                <Grid item md={6} sm={3} xs={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id={activityId}
                    label={`Activity ${index + 1}`}
                    name={activityId}
                    autoFocus
                    value={activityState[index].name}
                    onChange={handleActivityChange("name", index)}
                  />
                </Grid>
                <Grid item md={2} sm={3} xs={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id={activityPointsId}
                    label="Points"
                    name={activityPointsId}
                    type="number"
                    inputProps={{ min: "0" }}
                    value={activityState[index].points}
                    onChange={handleActivityChange("points", index)}
                  />
                </Grid>
                <Grid container item md={2} sm={3} xs={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={activityState[index].challenge}
                        checked={activityState[index].challenge}
                        onChange={handleActivityChange("challenge", index)}
                        color="primary"
                      />
                    }
                    label="Challenge?"
                    labelPlacement="top"
                  />
                </Grid>
                <Grid container item md={2} sm={3} xs={6} alignItems="center">
                  <Fab
                    color="primary"
                    variant="extended"
                    className={classes.button}
                    aria-label="delete activity"
                    onClick={deleteActivity(index)}
                  >
                    <DeleteIcon />
                    Delete
                  </Fab>
                </Grid>
              </Fragment>
            );
          })}
        </Grid>
      )}
    </CreateForm>
  );
};

export default ActivityPage;
