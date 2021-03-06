import React from "react";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

const LeagueTable: React.FC<{ data: [] }> = ({ data = [] }) => {
  if (data.length > 0) {
    const rows = data.map(({ id, name, type }) => {
      return (
        <TableRow key={id}>
          <TableCell>{id}</TableCell>
          <TableCell>{name}</TableCell>
          <TableCell>{type}</TableCell>
          <TableCell>
            <Link component={RouterLink} to={`/league/${id}`}>
              View League
            </Link>
          </TableCell>
        </TableRow>
      );
    });
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </Table>
    );
  }
  return <div>No League data available</div>;
};

export default LeagueTable;
