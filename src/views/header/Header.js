import { AppBar, Toolbar, 
   // Box as MuiBox 
} from '@mui/material';
import React from 'react';
//import SearchInput from '../../components/SearchInput';
import Typography from '../../components/Typography';
//import MainOption from './MainOption';

export default function Header () {
    return (
        <React.Fragment>
            <AppBar 
                position="fixed" 
                sx={{ zIndex: theme => theme.zIndex.drawer + 1,}}>
                <Toolbar variant="dense">
                    <Typography flexGrow={1} fontSize={18} fontWeight="bold" variant="h6" noWrap component="div">
                        Archives
                    </Typography>
                    {/* <SearchInput
                        onChange={event => {
                            const customEvent = new CustomEvent('_search_data', {
                                detail: {
                                    value: event.target.value,
                                    name: '_search_data',
                                }
                            });
                            document.getElementById('root')?.dispatchEvent(customEvent);
                        }}
                    /> */}
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}