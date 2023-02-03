import { 
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText, 
    ListSubheader, 
    Stack,
    Switch,
} from "@mui/material";
import { useState } from "react";
import _columns from "../../main/displays/list/columns";

export default function Columns () {
    const [columns, setColumns] = useState(_columns);

    return (
        <Stack
            flex={1}
            display="flex"
            overflow="hidden"
            flexDirection="column"
            mb={1}
        >
            <List
                sx={{
                    overflow:"auto",
                    display: 'flex',
                    flex: 1,
                    width: '100%',
                    maxHeight: 300,
                    flexDirection: 'column'
                }}
                subheader={
                    <ListSubheader component="div">
                        Colonnes
                    </ListSubheader>
                }
                dense
            >
            {
                columns.map(col => (
                    <ListItem key={col.field}>
                        <ListItemText primary={col?.headerName || col?.label} />
                        <Switch
                            edge="end"
                            size="small"
                        />
                    </ListItem>
                ))
            }

            </List>
        </Stack>
    )
}