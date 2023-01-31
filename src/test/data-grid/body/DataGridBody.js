import React from 'react';
import { Checkbox, TableBody, TableCell, TableRow } from '@mui/material';
import PropTypes from 'prop-types';

export default function DataGridBody ({rows, checkbox}) {
    return (
        <React.Fragment>
            <TableBody>
            {rows.map((row, _key) => (
                <TableRow key={_key}>
                {Object.keys(row).map(key => (
                    <React.Fragment key={key + _key}>
                        {checkbox &&
                        <TableCell height={38}>
                            <Checkbox size="small"/>
                        </TableCell>
                        }
                        <TableCell height={38}>
                            {row[key]}
                        </TableCell>
                    </React.Fragment>
                ))}
            </TableRow>
            ))}
            </TableBody>
        </React.Fragment>
    );
}

DataGridBody.defaultProps = {
    rows: [],
}

DataGridBody.propTypes = {
    rows: PropTypes.array,
}