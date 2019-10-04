import React, { Fragment } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { FormContainer } from "../../../forms";
import { useForm } from "../../../../utils";
import { CardContainer } from "../../../common";
import { ILeagueId, IActivityProps } from "../../../../types";

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    margin: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Activities: React.FC<ILeagueId> = props => {
  const classes = useStyles({});
  const { leagueId } = props;

  const useFormProps = {
    url: `http://localhost:5000/leagues/${leagueId}/activities`,
    initialState: { activities: [] as any[] },
    onMountPath: "activities",
    onMount: true
  };

  const {
    values = { activities: [] },
    handleInputChange,
    handleSubmit,
    loading,
    fetchResponse,
    setValues
  } = useForm({ ...useFormProps });

  const deleteActivity = (id: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
    const newValues = [...values.activities];
    newValues.splice(id, 1);
    setValues({ activities: [...newValues] });
  };
  const addActivity = () => {
    const newActivity = { name: "", points: "", bonus: false };
    setValues({ activities: [...values.activities, { ...newActivity }] });
  };

  const ButtonComponent = () => {
    return values.activities.length > 0 ? (
      <Button type="submit" variant="contained" color="primary" className={classes.submit}>
        Update League Activities
      </Button>
    ) : null;
  };

  const formProps = {
    formHeader: "Add your daily activities for your league",
    ButtonComponent: ButtonComponent,
    addItemText: "Add new activity",
    addItem: addActivity,
    type: "edit"
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <CardContainer center>
          <FormContainer handleSubmit={handleSubmit} loading={loading} {...formProps}>
            {values.activities.length > 0 && (
              <Grid container spacing={1}>
                {values.activities.map((activity: IActivityProps, index: number) => {
                  const activityId = `activity-${index}`;
                  const activityPointsId = `activity-points-${index}`;
                  return (
                    <Fragment key={index}>
                      <Grid item md={6} sm={3} xs={6}>
                        <TextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          required
                          id={activityId}
                          label={`Activity ${index + 1}`}
                          name={activityId}
                          autoFocus
                          value={activity.name}
                          onChange={handleInputChange("name", index, "activities")}
                        />
                      </Grid>
                      <Grid item md={2} sm={3} xs={6}>
                        <TextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          required
                          id={activityPointsId}
                          label="Points"
                          name={activityPointsId}
                          type="number"
                          inputProps={{ min: "0" }}
                          value={activity.points}
                          onChange={handleInputChange("points", index, "activities")}
                        />
                      </Grid>
                      <Grid container item md={2} sm={3} xs={6} justify="center">
                        <FormControlLabel
                          control={
                            <Checkbox
                              value={activity.bonus}
                              checked={activity.bonus}
                              onChange={handleInputChange("bonus", index, "activities")}
                              color="primary"
                            />
                          }
                          label="Bonus?"
                          labelPlacement="top"
                        />
                      </Grid>

                      {/* <Grid container item md={2} sm={3} xs={6} justify="center">
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={values.activities[index].challenge}
                        checked={values.activities[index].challenge}
                        onChange={handleInputChange("challenge", index, "activities")}
                        color="primary"
                      />
                    }
                    label="Challenge?"
                    labelPlacement="top"
                  />
                </Grid> */}
                      <Grid
                        container
                        item
                        md={2}
                        sm={3}
                        xs={6}
                        alignItems="center"
                        justify="center"
                      >
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
          </FormContainer>
        </CardContainer>
      </Grid>
    </Grid>
  );
};

export default Activities;