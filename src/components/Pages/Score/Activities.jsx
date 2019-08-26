import React, { useState } from "react";
import MUITable from "./MUITable";

export const Activities = () => {
  const [data, updatedata] = useState([
    {
      name: "Push Ups",
      points: 100,
      value: 10
    },
    {
      name: "Pull Ups",
      points: 500,
      value: 20,
      challenge: true
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
    { title: "Challenge", field: "challenge", type: "boolean", editable: "never" },
    { title: "Points", field: "points", type: "numeric", editable: "never" },
    { title: "Value", field: "value", type: "numeric" }
  ]);
  const actions = [];
  const options = {
    showTitle: false,
    toolbar: false
  };
  return (
    <MUITable
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
  );
};

export default Activities;
