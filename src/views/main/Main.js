import { Toolbar, Box as MuiBox, Divider } from "@mui/material";
//import queryString from "query-string";
//import { useMemo } from "react";
import { useSelector } from "react-redux";
//import { useLocation } from "react-router-dom";
import ListData from "./displays/list/ListData";
//import Thumbnail from "./displays/thumbnail/Thumbnail";
import SubHeader from "./sub-header/SubHeader";

export default function Main () {
    const data = useSelector(store => store.data.elements);

    return (
        <MuiBox component="main" sx={{ flexGrow: 1, px: .5, width: "100%" }}>
            <Toolbar variant="dense"/>
            <SubHeader/>
            <Divider/>
            <MuiBox
                height="calc(100% - 100px)"
                overflow="hidden"
            >
                {<ListData data={data}/>}
            </MuiBox>
        </MuiBox>
    )
}