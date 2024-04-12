import { Drawer, Toolbar, Box as MuiBox, Divider } from "@mui/material";
import TreeDataView from "./tree-data-view/TreeDataView";
import SearchInput from "../../components/SearchInput";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import IconButton from "../../components/IconButton";
import Typography from "../../components/Typography";
import { useDispatch, useSelector } from "react-redux";
import { updateAppData } from "../../redux/app";
export const drawerWidth = 350;

export default function Navigation () {
    const open = useSelector(store => store.app.archives.openLeftNavigation);
    const dispatch = useDispatch();

    console.log('Hollo world !');

    return (
        <Drawer
            variant="persistent"
            open={open}
            sx={{
                width: drawerWidth, 
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { 
                    width: drawerWidth, 
                    boxSizing: 'border-box',
                    background: 'none',
                    overflow: 'hidden',
                },
            }}
        >
            <Toolbar variant="dense"/>
            <Toolbar variant="dense">
                <IconButton
                    onClick={() => {
                        dispatch(
                            updateAppData({
                                data: {
                                    archives: { openLeftNavigation: !open }
                                }
                            })
                        )
                    }}
                >
                    <MenuOpenIcon/>
                </IconButton>
                <Typography 
                    fontWeight="bold" 
                    ml={2}
                >Fichiers</Typography>
            </Toolbar>
                <MuiBox sx={{ my: 1, mr: 1 }}>              
                    <SearchInput/>
                </MuiBox>
            <Divider/>
            <MuiBox sx={{ overflow: 'hidden', display: 'flex', flexGrow: 1, }}>
                <TreeDataView/>
            </MuiBox>
        </Drawer>
    )
}