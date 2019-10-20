import React, { Fragment, useMemo } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { FormContainer } from "../../../forms";
import { useForm, useLeagueValue } from "../../../../utils";
import { CardContainer } from "../../../common";
import { IActivityProps } from "../../../../types";

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    margin: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Activities: React.FC = props => {
  const classes = useStyles({});
  const { leagueId } = useLeagueValue();

  const useFormProps = {
    url: `http://localhost:5000/leagues/${leagueId}/activities`,
    initialState: { activities: [] as any[] },
    formPath: "activities",
    updateFormValues: true,
    formKeys: useMemo(
      () => [
        {
          name: "name"
        },
        {
          name: "points"
        },
        {
          name: "bonus"
        },
        {
          name: "delete",
          valueFormatter: () => false
        }
      ],
      [leagueId]
    )
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
    const newActivity = { name: "", points: "", bonus: false, delete: false, created: true };
    setValues({ activities: [...values.activities, { ...newActivity }] });
  };

  const ButtonComponent = () => {
    return values.activities.length > 0 ? (
      <Button type="submit" variant="contained" color="primary" className={classes.submit}>
        Update Activities
      </Button>
    ) : null;
  };

  const formProps = {
    formHeader: "League Activities",
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
              <Fragment>
                {values.activities.map((activity: IActivityProps, index: number) => {
                  const activityId = `activity-${index}`;
                  const activityPointsId = `activity-points-${index}`;
                  return (
                    <Grid container spacing={1} key={index}>
                      <Grid item md={3} sm={12} xs={12}>
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
                          disabled={!activity.created ? true : false}
                        />
                      </Grid>
                      <Grid item md={3} sm={12} xs={12}>
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
                      <Grid
                        container
                        item
                        md={3}
                        sm={6}
                        xs={6}
                        justify="center"
                        alignItems="center"
                      >
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
                        md={3}
                        sm={6}
                        xs={6}
                        alignItems="center"
                        justify="center"
                      >
                        {!activity.created && (
                          <FormControlLabel
                            control={
                              <Checkbox
                                value={activity.delete || false}
                                checked={activity.delete}
                                onChange={handleInputChange("delete", index, "activities")}
                                color="primary"
                              />
                            }
                            label="Remove Activity?"
                            labelPlacement="top"
                          />
                        )}
                        {activity.created && (
                          <Fab
                            color="primary"
                            variant="extended"
                            className={classes.button}
                            aria-label="delete member"
                            onClick={deleteActivity(index)}
                          >
                            <DeleteIcon />
                            Delete
                          </Fab>
                        )}
                      </Grid>
                    </Grid>
                  );
                })}
              </Fragment>
            )}
          </FormContainer>
        </CardContainer>
      </Grid>
    </Grid>
  );
};

export default Activities;
