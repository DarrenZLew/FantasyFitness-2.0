import React, { useState } from "react";
import MUITable from "../../MUITable";

export const Activities = (props: any) => {
  const [columns, updateColumns] = useState([
    { title: "Name", field: "name", editable: "never" },
    // { title: "Challenge", field: "challenge", type: "boolean", editable: "never" },
    { title: "Points", field: "points", type: "numeric", editable: "never" },
    { title: "Value", field: "value", type: "numeric", emptyValue: "0" }
  ]);
  const actions = [] as any[];
  const options = {
    showTitle: false,
    toolbar: false
  };
  return (
    <MUITable
      columns={columns}
      data={props.activities}
      actions={actions}
      options={options}
      editable={{
        onRowUpdate: (newData: any, oldData: any) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              console.log(newData, oldData);
              // const index = props.activities.indexOf(oldData);
              // data[index] = newData;
              // props.handleSubmit([...data])
              // // updatedata([...data]);
              // console.log(data);
              resolve();
            }, 1000);
          })
      }}
    />
  );
};

export default Activities;
