import { Drawer, Toolbar, Box as MuiBox } from "@mui/material";
import Columns from "./columns/Columns";
//import ListOptions from "./ListOptions";
import OrganicFrame from "./organicframe/OrganicFrame";

export const drawerWidth = 250;
export default function Navigation () {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { 
                    width: drawerWidth, 
                    boxSizing: 'border-box',
                    background: 'none'
                },
            }}
        >
            <Toolbar variant="dense"/>
            <MuiBox sx={{ overflow: 'hidden', display: 'flex', flexGrow: 1, }}>
                <Columns/>
            </MuiBox>
        </Drawer>
    )
}