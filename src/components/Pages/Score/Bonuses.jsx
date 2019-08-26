import React, { Fragment, useState } from "react";
import MUITable from "./MUITable";

export const Bonuses = () => {
  const [data, updateData] = useState({
    "Bonus 1": [
      {
        sunday: true,
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: true
      }
    ],
    "Bonus 2": [
      {
        sunday: true,
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: true
      }
    ]
  });
  const [columns, updateColumns] = useState([
    { title: "Sunday", field: "sunday", type: "boolean" },
    { title: "Monday", field: "monday", type: "boolean" },
    { title: "Tuesday", field: "tuesday", type: "boolean" },
    { title: "Wednesday", field: "wednesday", type: "boolean" },
    { title: "Thursday", field: "thursday", type: "boolean" },
    { title: "Friday", field: "friday", type: "boolean" },
    { title: "Saturday", field: "saturday", type: "boolean" }
  ]);
  const actions = [];
  const options = {
    showTitle: true,
    toolbar: true
  };
  return (
    <Fragment>
      {Object.entries(data).map(([title, datum], index) => {
        return (
          <MUITable
            key={index}
            title={title}
            columns={columns}
            data={datum}
            actions={actions}
            options={options}
            editable={{
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    data[title] = [newData];
                    updateData({ ...data });

                    resolve();
                  }, 1000);
                })
            }}
          />
        );
      })}
    </Fragment>
  );
};

export default Bonuses;
