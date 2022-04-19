import React from "react";
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableHeadStyle: {
    backgroundColor: "#f5f5f5",
  },
});

export type TableProps = {
  rows: any[];
  header: string[];
  handleClick: (type: string, data: any) => void;
};

export const TableComponent: React.FC<TableProps> = ({ rows, header, handleClick }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.tableHeadStyle}>
          <TableRow>
            {!!header &&
              header.map((headers) => (
                <TableCell key={headers} align="center">
                  {headers}
                </TableCell>
              ))}
            <TableCell />
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {!!rows &&
            rows.map((row) => (
              <TableRow key={row.firstName + row.email}>
                <TableCell align="center">{row.firstName}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.phone}</TableCell>
                <TableCell align="center">{row.country}</TableCell>
                <TableCell
                  align="center"
                  onClick={() => handleClick("edit", row)}
                >
                  <CreateIcon />
                </TableCell>
                <TableCell
                  align="center"
                  onClick={() => handleClick("del", row)}
                >
                  <DeleteIcon />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
