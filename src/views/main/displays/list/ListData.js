import { useEffect, useMemo, useState } from "react"
import { DataGrid, frFR } from "@mui/x-data-grid";
import columns from "./columns";
import { CircularProgress, Paper } from "@mui/material";
import { DataGridPro, GridToolbar } from "@mui/x-data-grid-pro";

export default function ListData ({data}) {
    const [loading, setLoading] = useState(true);
    const rows = useMemo(() => 
        data.map((item, index) => ({
            ...item,
            id: index + 1,
            createdAt: new Date(item.createdAt),
            classNum: '---------',
            code: '---------',
            destination: '---------',
            urgence: '---------',
            refNum: '---------',
            numServiceDis: '---------',
            origin: item.createdBy.role,
            type: item.type?.type,
            designation: item?.designation,
            object: item?.object,
            description: item?.description,
            secrete: '---------',
            status: '---------',
            subType: item.type?.subType || '---------',
        })),[data]);

    useEffect(() => {
        const hackingDom = document.querySelector('.Mui-resizeTriggers')?.previousElementSibling;
        if(hackingDom)
           hackingDom.innerHTML = '';
        if(hackingDom?.innerHTML === '' && loading)
            setLoading(false);
        
    });
    return (
        <Paper
            sx={{
                height: '100%',
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <DataGridPro
                columns={columns}
                rows={rows}
                localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
                pageSize={100}
                rowsPerPageOptions={[100]}
                disableColumnSelector
                // isCellEditable={event => {
                //     console.log(event)
                // }}
                density="compact"
                sx={{...loading && {display:  'none'}}}
                initialState={{ pinnedColumns: { left: ['id'], right:   ['actions'] } }}
                components={{
                    Toolbar: GridToolbar,
                  }}
                
                // isRowSelectable={event => {
                //     console.log(event)
                // }}
            />
            {loading &&
            <CircularProgress
                size={25}
            />}
        </Paper>
    )
}