import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import MinusSquare from '../../../svg/MinusSquare';
import PlusSquare from '../../../svg/PlusSquare';
import CloseSquare from '../../../svg/CloseSquare';
import { List, ListItem, Stack } from '@mui/material';
import BoxScrollShadow from '../../../components/BoxScrollShadow';

import { styled } from '@mui/material/styles';
//import TreeViewItem from './TreeViewItem';
//import { useSelector } from 'react-redux';

const CustomListItme = styled(ListItem)(({theme}) => ({
    maxHeight: '100%',
    overflow:"hidden",
    flex: 1,
    justifyContent: 'normal',
    alignItems: 'normal',
}));

export default function OrganicFrame() {
   // const role = useSelector(state => state.user.role);

  return (
    <Stack
        flex={1}
        display="flex"
        overflow="hidden"
        flexDirection="column"
        mb={1}
    >
        <List
            sx={{
                overflow:"hidden",
                display: 'flex',
                flex: 1,
                width: '100%',
                maxHeight: '100%',
                flexDirection: 'column'
            }}
        // subheader={
        //     <ListSubheader component="div">
        //         Cadre organique
        //     </ListSubheader>
        // }
        >
            <CustomListItme
                sx={{
                    px: 0,
                    pb: 0,
                }}
            >
                <BoxScrollShadow
                    sx={{
                        display: 'flex',
                        flex: 1,
                        overflow: 'auto',
                        maxHeight: '100%',
                        flexDirection: 'column',
                        m:0,
                        p: 0,
                    }}
                >
                     <CustomListItme
                        sx={{overflow: 'visible', pt: 0, mt: 0}}
                     >
                        <TreeView
                            aria-label="customized"
                            //defaultExpanded={['2']}
                            defaultCollapseIcon={<MinusSquare />}
                            defaultExpandIcon={<PlusSquare />}
                            defaultEndIcon={<CloseSquare />}
                            sx={{ flexGrow: 1, overflow: 'visible',}}
                        >
                            {/* <TreeViewItem 
                                label={role} 
                                treeId={role} 
                                id={0}
                            /> */}
                        </TreeView>
                    </CustomListItme>
                </BoxScrollShadow>
            </CustomListItme>
        </List>
         
    </Stack>
  );
}
