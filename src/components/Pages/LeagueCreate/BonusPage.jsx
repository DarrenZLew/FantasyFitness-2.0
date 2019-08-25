import React, { Fragment } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import LeagueForm from "../../forms/LeagueForm";

const useStyles = makeStyles(theme => ({
  icon: {
    fontSize: 25,
    marginRight: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const BonusPage = ({ bonusState, updateBonusState }) => {
  const classes = useStyles();

  const deleteBonus = id => e => {
    const newBonusState = [...bonusState];
    newBonusState.splice(id, 1);
    updateBonusState([...newBonusState]);
  };
  const addBonus = () => {
    const newBonus = { name: "", points: "", challenge: false };
    updateBonusState([...bonusState, { ...newBonus }]);
  };

  const handleBonusChange = (fieldName, id) => e => {
    const updatedBonuses = [...bonusState];
    const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    updatedBonuses[id][fieldName] = newValue;
    updateBonusState(updatedBonuses);
  };

  const formHeader = "Add your weekly bonus activities for your league";
  const addItemText = "Add new bonus";

  return (
    <LeagueForm formHeader={formHeader} addItem={addBonus} addItemText={addItemText}>
      {bonusState.length > 0 && (
        <Grid container spacing={1}>
          {bonusState.map((bonus, index) => {
            const bonusId = `bonus-${index}`;
            const bonusPointsId = `bonus-points-${index}`;
            return (
              <Fragment key={index}>
                <Grid item md={6} sm={3} xs={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id={bonusId}
                    label={`Bonus ${index + 1}`}
                    name={bonusId}
                    autoFocus
                    value={bonusState[index].name}
                    onChange={handleBonusChange("name", index)}
                  />
                </Grid>
                <Grid item md={2} sm={3} xs={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id={bonusPointsId}
                    label="Points"
                    name={bonusPointsId}
                    type="number"
                    inputProps={{ min: "0" }}
                    value={bonusState[index].points}
                    onChange={handleBonusChange("points", index)}
                  />
                </Grid>
                <Grid container item md={2} sm={3} xs={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={bonusState[index].challenge}
                        checked={bonusState[index].challenge}
                        onChange={handleBonusChange("challenge", index)}
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
                    aria-label="delete bonus"
                    onClick={deleteBonus(index)}
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
    </LeagueForm>
  );
};

export default BonusPage;
