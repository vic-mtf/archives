import { useMemo } from 'react';
import { Toolbar, Box as MuiBox, Divider, styled } from "@mui/material";
import { useSelector } from "react-redux";
import ListData from "./displays/list/ListData";
import SubHeader from "./sub-header/SubHeader";
import { drawerWidth } from "../navigation/Navigation";

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
  );

export default function Content () {
    const open = useSelector(store => store.app.archives.openLeftNavigation);
    return (
        <Main 
            open={open}
        >
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
        </Main>
    )
}