import React, { useState } from "react";
import MUITable from "../../MUITable";

export const DailyScoreSheet = props => {
  const [data, updatedata] = useState([
    {
      name: "Darren",
      "match-up": "Ryan",
      "push-ups": 10,
      "pull-ups": 100,
      crunches: 10
    },
    {
      name: "Ryan",
      "match-up": "Darren",
      "push-ups": 100,
      "pull-ups": 20,
      crunches: 30
    },
    {
      name: "Alex",
      "match-up": "Tom",
      "push-ups": 10,
      "pull-ups": 100,
      crunches: 10
    },
    {
      name: "Tom",
      "match-up": "Alex",
      "push-ups": 30,
      "pull-ups": 400,
      crunches: 10
    }
  ]);
  const [columns, updateColumns] = useState([
    { title: "Name", field: "name", removable: false },
    { title: "Match Up", field: "match-up", removable: false },
    { title: "Push Ups", field: "push-ups", type: "numeric" },
    { title: "Pull Ups", field: "pull-ups", type: "numeric" },
    { title: "Crunches", field: "crunches", type: "numeric" }
  ]);
  const actions = [];
  const options = {
    showTitle: true,
    toolbar: true,
    search: true,
    columnsButton: true,
    filtering: true
  };
  return (
    <MUITable
      title={props.title}
      columns={columns}
      data={data}
      actions={actions}
      options={options}
      detailPanel={[
        {
          icon: "star",
          openIcon: "star_border",
          tooltip: "Show Match Up",
          render: rowData => {
            return (
              <div
                style={{
                  fontSize: 100,
                  textAlign: "center",
                  color: "white",
                  backgroundColor: "#E53935"
                }}
              >
                Display Head To Head Component
              </div>
            );
          }
        }
      ]}
    />
  );
};

export default DailyScoreSheet;
