import {
    Paper,
    Table,
    TableContainer, 
    TablePagination
} from '@mui/material';
import React, { useMemo, useState } from 'react';
import propTypes from 'prop-types';
import DataGridHeader from './header/DataGridHeader';
import DataGridBody from './body/DataGridBody';

export default function DataGrid (props) {
    const {
        columns: _columns,
        rows: _rows,
        checkbox
    } = props;
    const [page, setPage] = useState(0);
    const [rowsPerPage] = useState(100);
    const columns = useMemo(() => _columns?.filter(col => !col?.pin), [_columns]);
    const pinningColumns = useMemo(() => _columns?.filter(col => col?.pin), [_columns]);

    const rows = useMemo(() => 
        _rows?.map(row => {
            const row_ = {};
            columns.forEach(({field}) => {
                row_[field] = row[field];
            });
            return row_;
        })
    , [_rows, columns]);

    const pinningRows = useMemo(() => 
        _rows?.map(row => {
            const row_ = {};
            pinningColumns.forEach(({field}) => {
                row_[field] = row[field];
            });
            return row_;
        })
    , [_rows, pinningColumns])

    const showPinnigTable = useMemo(() => pinningColumns?.length > 0 || checkbox, 
    [pinningColumns, checkbox]
    );
    const count = useMemo(() => _rows?.length, [_rows]);
    
    const handleChangePage = (event, newPage) => setPage(newPage);
    return (
        <Paper elevation={0}>
            <TablePagination
                rowsPerPageOptions={[]}
                component="div"
                variant="head"
                //labelRowsPerPage="text"
                labelDisplayedRows={({ from, to, count }) => 
                   `${from} à ${to} sur ${count !== -1 ? count : `plus que ${to}`}`
                }
                backIconButtonProps={{size: 'small'}}
                nextIconButtonProps={{size: 'small'}}
                count={count}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
            />
            <TableContainer
                sx={{
                    display: 'flex',
                    flex: 1,
                    height: 500,
                }}
            >
                {showPinnigTable &&
                <React.Fragment>
                    <Table
                        stickyHeader
                        sx={{
                            left: 0,
                            position: 'sticky',
                            zIndex: theme => theme.zIndex.appBar,
                            borderRight: theme => `1px solid ${theme.palette.divider}`,
                            bgcolor: theme => theme.palette.background.paper,
                        }}
                    >
                        <DataGridHeader 
                            columns={pinningColumns} 
                            checkbox={checkbox} />
                        <DataGridBody 
                            rows={pinningRows} 
                            checkbox={checkbox} 
                        />
                    </Table>
                </React.Fragment>}
                <Table stickyHeader>
                    <DataGridHeader columns={columns} />
                    <DataGridBody rows={rows} />
                </Table>
            </TableContainer>
        </Paper>
    );

}

DataGrid.defaultProps = {
    pinClomns: [],
    onChangeCell: null,
    checkbox: false,
    columns: [],
    rows: [],
}

DataGrid.propTypes = {
    pinClomns: propTypes.array,
    onChangeCell: propTypes.func,
    checkbox: propTypes.bool,
    columns: propTypes.array,
    rows: propTypes.array,
}
