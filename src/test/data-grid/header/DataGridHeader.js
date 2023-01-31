import React from 'react';
import {
    Box,
    TableCell,
    TableHead, 
    TableRow, 
    TableSortLabel,
    Checkbox
} from '@mui/material';
import Typography from '../../../components/Typography';

export default function DataGridHeader ({columns, checkbox}) {

    return (
        <React.Fragment>
            <TableHead
                sx={{height: 80}}
            >
                <TableRow>
                    {checkbox &&
                    <TableCell>
                        <Checkbox size="small" />
                    </TableCell>}
                    {columns?.map(({
                        id, 
                        label, 
                        sortable, 
                        ...column
                    }) => (
                    <React.Fragment key={id}>
                        <TableCell>
                            <Box
                                component={(sortable === undefined || sortable) ? TableSortLabel : 'div'}
                                onClick={event => {}}
                            >
                                <Typography
                                    whiteSpace="nowrap"
                                    textOverflow="ellipsis"
                                    maxWidth={120}
                                    overflow="hidden"
                                    flexGrow={1}
                                    fontSize={15}
                                    fontWeight="bold"
                                >{label}</Typography>
                            </Box>
                        </TableCell>
                    </React.Fragment>
                    ))}
                </TableRow>
            </TableHead>
        </React.Fragment>
    )
}