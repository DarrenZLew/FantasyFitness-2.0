import React, { Fragment, useMemo } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { FormContainer } from "../../../forms";
import { useSeasonValue } from "../../../../utils";
import { CardContainer } from "../../../common";

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    margin: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Season: React.FC = props => {
  const classes = useStyles({});

  const {
    seasonValues: {
      values,
      seasonDisabled,
      handleSubmit,
      handleInputChange,
      handleDateChange,
      loading,
      fetchResponse
    }
  } = useSeasonValue();

  const ButtonComponent = () => {
    return (
      <Button
        type="submit"
        disabled={seasonDisabled}
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Update Season
      </Button>
    );
  };
  const formProps = {
    formHeader: "League Season Information",
    ButtonComponent: ButtonComponent,
    type: "edit"
  };
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <CardContainer center>
          <FormContainer handleSubmit={handleSubmit} loading={loading} {...formProps}>
            <Fragment>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="weeks_number"
                    label="Number of Weeks in Season"
                    id="weeks_number"
                    type="number"
                    value={values.weeks_number || 0}
                    onChange={handleInputChange("weeks_number")}
                    inputProps={{ min: "0", steps: "1" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <KeyboardDatePicker
                    disablePast
                    clearable
                    inputVariant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="start_date"
                    label="Start Date of Season"
                    id="start_date"
                    disableToolbar
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                    format="MM/dd/yyyy"
                    InputAdornmentProps={{ position: "start" }}
                    value={values.start_date || new Date()}
                    onChange={handleDateChange("start_date")}
                  />
                </Grid>
              </Grid>
            </Fragment>
          </FormContainer>
        </CardContainer>
      </Grid>
    </Grid>
  );
};

export default Season;
