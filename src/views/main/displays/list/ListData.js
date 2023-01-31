import { useMemo } from "react"
import { DataGrid, frFR, GridToolbar} from "@mui/x-data-grid";
import columns from "./columns";

export default function ListData ({data}) {
    const rows = useMemo(() => 
    data.map((item, index) => ({
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
    console.log(data);
    return (
        <DataGrid
            columns={columns}
            rows={rows}
            localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
            components={{
            Toolbar: GridToolbar,
            }}
        />
    )
}