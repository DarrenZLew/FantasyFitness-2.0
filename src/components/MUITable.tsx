import React from "react";
import MaterialTable from "material-table";

interface IMUITableProps {
  columns?: any;
  data?: any;
  actions?: any;
  options?: object;
  title?: string;
  editable?: any;
  detailPanel?: any;
}

const MUITable = ({
  columns,
  data,
  actions,
  options,
  title,
  editable,
  detailPanel
}: IMUITableProps) => {
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
      detailPanel={detailPanel}
    />
  );
};

export default MUITable;
