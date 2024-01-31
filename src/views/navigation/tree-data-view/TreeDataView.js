import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { TreeView } from '@mui/x-tree-view/TreeView';
import StyledTreeItem from './StyledTreeItem';
import useDate from '../../../data/useData';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';

export default function TreeDataView() {
  const data = useDate(20);

  return (
    <TreeView
      aria-label="data"
      defaultExpanded={[]}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
      sx={{ 
        flexGrow: 1,
        overflowY: 'auto',
      }}
    >
      {data.map((data, index) => (
        data.folder ? 
        <TreeFolderData 
          nodeId={index}
          labelText={data.designation}
          key={index}
        /> :
        <StyledTreeItem 
          nodeId={index.toString()}
          labelText={data.designation}
          labelIcon={props => <InsertDriveFileOutlinedIcon fontSize="small" {...props}/>} 
          key={index}
        />
      ))}
    </TreeView>
  );
}

const TreeFolderData = ({ nodeId=0, labelText }) => {
  const data = useDate();

  return (
  <StyledTreeItem
    labelText={labelText}
    labelIcon={props => <FolderRoundedIcon fontSize="small" {...props}/>}
    nodeId={nodeId}
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
