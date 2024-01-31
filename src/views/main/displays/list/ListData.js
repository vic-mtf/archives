import React from 'react';
import { 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
 } from '@mui/material';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { TableVirtuoso } from 'react-virtuoso';
import useData from '../../../../data/useData';
import Typography from '../../../../components/Typography';


const columns = [
  {
    label: 'Designation',
    dataKey: 'designation',
    maxWidth: 400,
  },
  {
    label: 'Type',
    dataKey: 'type',
  },
  {
    label: 'Date',
    dataKey: 'createdAt',
    type: 'date'
  },
  {
    label: 'Numéro de classement',
    dataKey: 'numeroDeReference'
  },
  {
    label: 'Numéro de Reference',
    dataKey: 'numeroDeReference',
  }
];

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component="div" {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} size="small" sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow hover {...props} />,
  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? 'right' : 'left'}
          style={{ width: column.width }}
          sx={{
            backgroundColor: 'background.paper',
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index, row) {
  const icon = row.folder ? FolderRoundedIcon : InsertDriveFileOutlinedIcon
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? 'right' : 'left'}
        >
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}
          >
            {column.dataKey === 'designation' && 
            React.createElement(icon, {
              fontSize: 'small'
            })}
            {row[column.dataKey]}
          </Typography>
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export default function ListData() {
    const data = useData(20);
    return (
        <TableVirtuoso
            data={data}
            components={VirtuosoTableComponents}
            fixedHeaderContent={fixedHeaderContent}
            itemContent={rowContent}
        />
    );
}