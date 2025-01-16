import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import FolderRoundedIcon from "@mui/icons-material/FolderRounded";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import { TableVirtuoso } from "react-virtuoso";
import PropTypes from "prop-types";

const columns = [
  {
    label: "Designation",
    dataKey: "designation",
    maxWidth: 400,
  },
  // {
  //   label: "Type",
  //   dataKey: "type",
  // },
  {
    label: "Date",
    dataKey: "createdAt",
    type: "date",
  },
  {
    label: "Numéro de classement",
    dataKey: "classNumber",
  },
  {
    label: "Numéro de Reference",
    dataKey: "refNumber",
  },
];
const Scroller = (props, ref) => (
  <TableContainer component='div' {...props} ref={ref} />
);
const CustomTableRow = (props) => <TableRow hover {...props} />;
const CustomTableBody = (props, ref) => <TableBody {...props} ref={ref} />;

const VirtuosoTableComponents = {
  Scroller: React.forwardRef(Scroller),
  Table: (props) => (
    <Table
      {...props}
      sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
    />
  ),
  TableHead,
  TableRow: CustomTableRow,
  TableBody: React.forwardRef(CustomTableBody),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant='head'
          align={column.numeric || false ? "right" : "left"}
          style={{ width: column.width }}
          sx={{
            backgroundColor: "background.paper",
          }}>
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index, row) {
  const icon = row.folder ? FolderRoundedIcon : InsertDriveFileOutlinedIcon;
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? "right" : "left"}>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}>
            {column.dataKey === "designation" &&
              React.createElement(icon, {
                fontSize: "small",
              })}
            {row[column.dataKey]}
          </Typography>
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export default function TableData({ data = [] }) {
  return (
    <TableVirtuoso
      data={data}
      components={VirtuosoTableComponents}
      fixedHeaderContent={fixedHeaderContent}
      itemContent={rowContent}
    />
  );
}

TableData.propTypes = {
  data: PropTypes.array,
};
