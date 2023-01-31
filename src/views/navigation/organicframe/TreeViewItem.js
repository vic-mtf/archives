import { CircularProgress, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import useAxios from "axios-hooks";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

//import { addTree } from "../../../../../redux/apps/archives/archivesNavLeft";
//import { getDocTypes, setRole } from "../../../../../redux/apps/archives/archivesNavRight";
//import serverPath from "../../../../../services/serverPath";

import CustomStyledTreeItem from "../../../components/CustomStyledTreeItem";

export default function TreeViewItem ({label, treeId, id,}) {

    const { token, id:userId } = useSelector(state => state.user.value);
    const docTypes = useSelector(state => state.archivesNavRight.value.docTypes);
    const role = useSelector(state => state.archivesNavRight.value.role);
    const { children, treeLabel, treeDocTypes } = useSelector(state => state.archivesNavLeft.value.trees[id.toString()]) || {};
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState();
    const [{loading, data, error}, refrech] = useAxios({
        url: STRUCT_URL + JSON.stringify({userId, structName: treeId}),
        headers: {'Authorization' : `Bearer ${token}`},
    }, {manual: true});

    const handleClick = () => {
        setOpen(!open);
        if(role !== treeId);
            dispatch(setRole(treeId));
        if(treeDocTypes)
            if(JSON.stringify(treeDocTypes) !== JSON.stringify(docTypes));
                dispatch(getDocTypes(treeDocTypes))
    };
    
    React.useEffect(() => {
        if(open && !data)
            refrech();
        if(!children && data) {
            const { docTypes, childs } = data;
            if(docTypes && childs) {
                dispatch(addTree({[id.toString()] : {
                    children: childs,
                    treeLabel: label,
                    treeDocTypes: docTypes,
                }}));
                dispatch(getDocTypes(docTypes));
            }
        }
        
    }, [open, children, data, dispatch]);
    
    return (
        <CustomStyledTreeItem onClick={handleClick} nodeId={id.toString()} label={treeLabel || label}>
            {children && children?.map((tree, index) => (
                <TreeViewItem 
                    label={tree}
                    treeId={tree}
                    id={`${id}_${index}`}
                    key={index}
                />)
            )}
            <Stack
                direction="row"
                spacing={1}
                display="flex"
                m={1}
                alignItems="center"
            >
                {loading && 
                <>
                    <CircularProgress size={10}/>
                    <Typography align="center" variant="caption" color="text.secondary">
                        Chargement...
                    </Typography>
                </>}
                {children?.length === 0 &&
                    <Typography paragraph component="div" align="center" variant="caption" color="text.secondary">
                        aucun élement trouvé
                    </Typography>
                }
                {error&&
                <Typography paragraph component="div" align="center" variant="caption" color="error">
                    Données indisponibles
                </Typography>}
            </Stack>
        </CustomStyledTreeItem>
    )
};

TreeViewItem.defaultProps = {
    path: [],
};

const STRUCT_URL = serverPath('api/stuff/archives/struct/');