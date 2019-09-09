import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(themes => ({
  header: {
    fontWeight: "bold"
  }
}));

export const TableGrid = ({ items }) => {
  const classes = useStyles();
  return items.map(item => (
    <Grid key={item.header} item xs={12}>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <Typography className={classes.header} variant="subtitle1">
            {item.header}
          </Typography>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography variant="body2">{item.value}</Typography>
        </Grid>
      </Grid>
    </Grid>
  ));
};

export default TableGrid;
