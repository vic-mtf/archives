import React, { useMemo, useRef, useEffect } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { TreeView } from '@mui/x-tree-view/TreeView';
import StyledTreeItem from '../../../components/StyledTreeItem';
// import useDate from '../../../data/useData';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { useSelector } from 'react-redux';

export default function TreeArchiveManagementView() {
  const docs = useSelector(store => store.data.docs);
  const apiRef = useRef();
  const data = useMemo(() => docs.map(doc => {
      // const folder =  data.older;
      return {
        ...doc
      }
    }), [docs]);

    useEffect(() => {
      console.log(apiRef);

    }, [])

  return (
    <TreeView
      aria-label="data"
      defaultExpanded={[]}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
      apiRef={apiRef}
      multiSelect
      
      sx={{ 
        flexGrow: 1,
        overflowY: 'auto',
      }}
    >
      {data.map((data) => (
        !data.folder ? 
        <TreeFolderData 
          nodeId={data?._id}
          labelText={data.designation}
          key={data?._id}
        /> :
        <StyledTreeItem 
          nodeId={data?._id}
          labelText={data.designation}
          labelIcon={props => <InsertDriveFileOutlinedIcon fontSize="small" {...props}/>} 
          key={data?._id}
        />
      ))}
    </TreeView>
  );
}

const TreeFolderData = ({ nodeId='0', labelText, data=[] }) => {
  

  return (
  <StyledTreeItem
    labelText={labelText}
    labelIcon={props => <FolderRoundedIcon fontSize="small" {...props}/>}
    nodeId={nodeId}
    multiSelect
  >
   { data.map((data, index) => (
      data.folder ? 
      <TreeFolderData 
        nodeId={`${nodeId}${index}`}
        labelText={data.designation}
        key={index}
      /> :
      <StyledTreeItem 
        nodeId={`${nodeId}${index}`}
        labelText={data.designation}
        labelIcon={props => <InsertDriveFileOutlinedIcon fontSize="small" {...props}/>} 
        key={index}
      />
    ))}
  </StyledTreeItem>
  )
};
