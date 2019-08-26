import React, { useState } from "react";
import MaterialTable from "material-table";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  header: {
    marginBottom: theme.spacing(3)
  }
}));

export const Score = () => {
  const classes = useStyles();
  const [data, updatedata] = useState([
    {
      name: "Push Ups",
      points: 100,
      value: 10
    },
    {
      name: "Pull Ups",
      points: 500,
      value: 20
    },
    {
      name: "Crunches",
      points: 20,
      value: 10
    },
    {
      name: "Crunches",
      points: 20,
      value: 10
    },
    {
      name: "Crunches",
      points: 20,
      value: 10
    },
    {
      name: "Crunches",
      points: 20,
      value: 10
    },
    {
      name: "Crunches",
      points: 20,
      value: 10
    },
    {
      name: "Crunches",
      points: 20,
      value: 10
    }
  ]);
  const [columns, updateColumns] = useState([
    { title: "Name", field: "name", editable: "never" },
    { title: "Points", field: "points", type: "numeric", editable: "never" },
    { title: "Value", field: "value", type: "numeric" }
  ]);
  const actions = [];
  const options = {
    actionsColumnIndex: -1,
    paging: false,
    search: false,
    doubleHorizontalScroll: true
  };
  return (
    <div className={classes.paper}>
      <Typography component="h1" variant="h5" className={classes.header}>
        Score Form
      </Typography>
      <MaterialTable
        title="Activities"
        style={{ width: "600px" }}
        columns={columns}
        data={data}
        actions={actions}
        options={options}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const index = data.indexOf(oldData);
                data[index] = newData;
                updatedata([...data]);

                resolve();
              }, 1000);
            })
        }}
      />
    </div>
  );
};
