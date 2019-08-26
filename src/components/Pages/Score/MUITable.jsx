import React from "react";
import MaterialTable from "material-table";

const MUITable = ({ columns, data, actions, options, title, editable }) => {
  const defaultOptions = {
    actionsColumnIndex: -1,
    paging: false,
    search: false,
    doubleHorizontalScroll: true,
    showTitle: false,
    toolbar: false,
    ...options
  };

  return (
    <MaterialTable
      title={title}
      columns={columns}
      data={data}
      actions={actions}
      options={defaultOptions}
      editable={editable}
    />
  );
};

export default MUITable;
