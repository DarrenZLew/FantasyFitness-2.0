import React, { useState } from "react";
import MUITable from "../../MUITable";

export const Activities = (props: any) => {
  const [columns, updateColumns] = useState([
    { title: "Name", field: "name", editable: "never" },
    // { title: "Challenge", field: "challenge", type: "boolean", editable: "never" },
    { title: "Points per count", field: "points", type: "numeric", editable: "never" },
    { title: "Count", field: "count", type: "numeric", emptyValue: "0" },
    { title: "Total", field: "total", type: "numeric", emptyValue: "0", editable: "never" }
  ]);
  const actions = [] as any[];
  const options = {
    showTitle: false,
    toolbar: false
  };
  console.log(props.activities);
  return (
    <MUITable
      columns={columns}
      data={props.activities}
      actions={actions}
      options={options}
      editable={{
        onRowUpdate: (newData: any, oldData: any) =>
          new Promise((resolve, reject) => {
            setTimeout(async () => {
              console.log(newData, oldData);
              // const index = props.activities.indexOf(oldData);
              // data[index] = newData;
              console.log(props);
              await props.handleSubmit({
                id: newData.id,
                count: newData.count,
                total: newData.count * newData.points
              });
              // updatedata([...data]);
              resolve();
            }, 1000);
          })
      }}
    />
  );
};

export default Activities;
