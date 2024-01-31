import { Toolbar } from "@mui/material";
import CollapsedBreadcrumbs from "./CollapsedBreadcrumbs";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import IconButton from "../../../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import { updateAppData } from "../../../redux/app";
// import { Stack } from "@mui/system";
// import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
// import AddRoundedIcon from '@mui/icons-material/AddRounded';
// import Button from "../../../components/Button";
// import SortButton from "./SortButton";
// import UploadFilesButton from "./UploadFilesButton";
// import TeleverseButton from "./TeleverseButton";
// import DisplayButton from "./DisplayButton";

export default function SubHeader () {
    const open = useSelector(store => store.app.archives.openLeftNavigation);
    const dispatch = useDispatch();

    return (
        <Toolbar variant="dense">
             {!open && (
                 <IconButton
                    onClick={() => {
                        dispatch(
                            updateAppData({
                                data: {
                                    archives: {
                                        openLeftNavigation: !open
                                    }
                                }
                            })
                        )
                    }}
                 >
                    <MenuOpenOutlinedIcon 
                        fontSize="small"
                        sx={{
                            transform: 'rotate(-180deg)'
                        }}
                    />
                </IconButton>
            )}
            <CollapsedBreadcrumbs/>
            <IconButton>
                <FilterAltOutlinedIcon fontSize="small"/>
            </IconButton>
        </Toolbar>
    );
}