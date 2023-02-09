import { useEffect, useState } from "react"
import { CircularProgress, Paper } from "@mui/material";
import { DataGridPro, GridToolbar, frFR } from "@mui/x-data-grid-pro";
import useColumns from "../../../../utils/useColumns";
import useRows from "../../../../utils/useRows";

export default function ListData ({data}) {
    const [loading, setLoading] = useState(true);
    const columns = useColumns();
    const rows = useRows(data);

    useEffect(() => {
        const hackingDom = document.querySelector('.Mui-resizeTriggers')
        ?.previousElementSibling;
        if(hackingDom)
           hackingDom.parentElement.removeChild(hackingDom);
        if(!hackingDom && loading)
            setLoading(false);
    }, [loading]);

    return (
        <Paper
            sx={{
                height: '100%',
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            component="div"
        >
            <DataGridPro
                columns={columns}
                rows={rows}
                localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
                pageSize={100}
                rowsPerPageOptions={[100]}
                disableColumnSelector
                autoPageSize
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