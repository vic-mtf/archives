import { useMemo } from 'react';
import { Toolbar, Box as MuiBox, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import ListData from "./displays/list/ListData";
import SubHeader from "./sub-header/SubHeader";
import { drawerWidth } from "../navigation/Navigation";

export default function Main () {
    const open = useSelector(store => store.app.archives.openLeftNavigation);
    const width = useMemo(() => open ? drawerWidth : 0, [open]);
    return (
        <MuiBox 
            component="main" 
            sx={{ 
                flexGrow: 1, 
                px: .5, 
                width: "100%",  
                // marginLeft: width,
            }}>
            <Toolbar variant="dense"/>
            <SubHeader/>
            <Divider/>
            <MuiBox
                height="calc(100% - 100px)"
                overflow="hidden"
                sx={{
                    display: "flex",
                    flex: 1,
                }}
            >
                {<ListData />}
            </MuiBox>
        </MuiBox>
    )
}