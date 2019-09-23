import React from "react";
import { TableGrid } from "../../../../common";

const DisplayProfile = ({ data }) => {
  const items = [
    {
      header: "League Name",
      value: data.name
    },
    {
      header: "League Type",
      value: data.type
    },
    // {
    //   header: "Number of Weeks in Season"
    // },
    // {
    //   header: "Season Start Date"
    // }
  ];
  return <TableGrid items={items} />
};

export default DisplayProfile