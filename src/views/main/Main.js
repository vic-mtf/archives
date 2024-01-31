import { useMemo } from 'react';
import { Toolbar, Box as MuiBox, Divider } from "@mui/material";
//import queryString from "query-string";
//import { useMemo } from "react";
import { useSelector } from "react-redux";
//import { useLocation } from "react-router-dom";
import ListData from "./displays/list/ListData";
//import Thumbnail from "./displays/thumbnail/Thumbnail";
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