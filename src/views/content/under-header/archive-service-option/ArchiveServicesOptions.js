import CollapsedBreadcrumbs from "./CollapsedBreadcrumbs";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import IconButton from "../../../../components/IconButton";

export default function ArchiveServicesOptions () {
    return (
        <>
            <CollapsedBreadcrumbs/>
            <IconButton>
                <FilterAltOutlinedIcon fontSize="small"/>
            </IconButton>
        </>
    );
}