import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { EditForm } from "../../../forms";
import { useForm } from "../../../../utils";
import { CardContainer } from "../../../common";

const useStyles = makeStyles(theme => ({
  icon: {
    fontSize: 25,
    marginRight: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Activities = () => {
  const classes = useStyles();

  const initialState = [];

  const url = "http://localhost:5000/auth/login";
  const { values, handleInputChange, handleSubmit, setValues } = useForm(
    initialState,
    url,
    () => {}
  );

  const deleteActivity = id => e => {
    const newValues = [...values];
    newValues.splice(id, 1);
    setValues([...newValues]);
  };
  const addActivity = () => {
    const newActivity = { name: "", points: "", bonus: false };
    setValues([...values, { ...newActivity }]);
  };

  const formHeader = "Add your daily activities for your league";
  const addItemText = "Add new activity";
  const ButtonComponent = () => {
    return values.length > 0 ? (
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Update League Activities
      </Button>
    ) : null;
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <CardContainer>
          <EditForm
            formHeader={formHeader}
            addItem={addActivity}
            addItemText={addItemText}
            ButtonComponent={ButtonComponent}
            handleSubmit={handleSubmit}
          >
            {values.length > 0 && (
              <Grid container spacing={1}>
                {values.map((activity, index) => {
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
                          value={values[index].name}
                          onChange={handleInputChange("name", index)}
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
                          value={values[index].points}
                          onChange={handleInputChange("points", index)}
                        />
                      </Grid>
                      <Grid container item md={2} sm={3} xs={6} justify="center">
                        <FormControlLabel
                          control={
                            <Checkbox
                              value={values[index].bonus}
                              checked={values[index].bonus}
                              onChange={handleInputChange("bonus", index)}
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
                        value={values[index].challenge}
                        checked={values[index].challenge}
                        onChange={handleInputChange("challenge", index)}
                        color="primary"
                      />
                    }
                    label="Challenge?"
                    labelPlacement="top"
                  />
                </Grid> */}
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
          </EditForm>
        </CardContainer>
      </Grid>
    </Grid>
  );
};

export default Activities;
