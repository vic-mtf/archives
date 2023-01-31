import { Stack } from "@mui/material";
import Box from "../components/BoxScrollShadow";
import DataGrid from "./data-grid/DataGrid";
import columns from "./data-grid/columns/columns";

export default function AppTest() {

  return (
    <Stack
        display="flex"
        sx={{ width: 500,}}
    >
        <DataGrid
            columns={columns}
            checkbox
            rows={(() => {
                const length = 10;
                const rows = [];
                for(let i = 0; rows.length < length; i++)
                    rows.push({
                        id: i,
                        createdAt: '22/05/12'
                    })
                return rows
            })()}
        />
    </Stack>
  );
}