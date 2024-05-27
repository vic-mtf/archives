import React, { useCallback, useMemo, useRef } from 'react';
import { TreeView  } from '@mui/x-tree-view/TreeView';
import StyledTreeItem from '../../../components/StyledTreeItem';
import { Box as MuiBox } from "@mui/material";
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { useSelector, useDispatch } from 'react-redux';
import { updateData } from '../../../redux/data';

export default function TreeArchiveManagementView() {
  const docs = useSelector(store => store.data.docs);
  const data = useMemo(() => docs.map(doc => {
    return { ...doc }
  }), [docs]);
  const selected = useSelector(store => store.data.navigation.archiveManagement.selectedElements);
  const dispatch = useDispatch();
  const rootTreeViewRef = useRef();

  const onNodeSelect = useCallback((event, nodeId) => {
    event?.preventDefault();
    let selectedElements;
    if(event.ctrlKey || event.altKey) 
      selectedElements = selected.includes(nodeId) ? selected.filter(id => id!== nodeId) : [...selected, nodeId];
    else selectedElements = [nodeId];
    dispatch(
      updateData({
        data: {
            navigation: {
              archiveManagement: { selectedElements }
            }
        }
      })
    );
  }, [dispatch, selected]);

  return (
    <MuiBox
      maxHeight="100%"
      overflow="hidden"
    >
      <TreeView
        aria-label="tree-archive-management-view"
        ref={rootTreeViewRef}
        onFocus={event => event.stopPropagation()}
        selected={selected}
        defaultEndIcon={<div style={{ width: 24 }} />}
        onNodeSelect={onNodeSelect}
        onNodeFocus={event => event.preventDefault()}
        sx={{ flexGrow: 1, overflowY: 'auto' }}
      >
        {data.map(({ _id, designation }) => (
          <StyledTreeItem 
            key={_id}
            nodeId={_id}
            labelText={designation}
            labelIcon={props => <InsertDriveFileOutlinedIcon fontSize="small" {...props}/>} 
          />
        ))}
      </TreeView>
    </MuiBox>
  );
}
