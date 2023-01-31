import {
  Grid,
  Box
} from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import Typography from '../../../../components/Typography';
import fileExtensionBase from '../../../../utils/fileExtensionBase';
import getFileExtension from '../../../../utils/getFileExtention';
import File from '../file/File';
import WrapperContent from './WrapperContent';

export default function Thumbnail ({data: _data}) {
    const [findName, setFindName] = useState('');
    const data = useMemo(() =>
     _data?.filter(
        item => item?.name?.match(new RegExp(
            (findName || '.') + '+', 
            'ig'
        ))
    ), [findName, _data]);

    useEffect(() => {
        const handleFinfName = event => {
            const {value} = event.detail || { value: ''};
            setFindName(value);
        }
        document.getElementById('root')
        .addEventListener('_search_data', handleFinfName);
        return () => {
            document.getElementById('root')
            .removeEventListener('_search_data', handleFinfName);
        }
    })
    return (
        <Box
            overflow="auto"
            p={1}
            height="85vh"
        >
            {data?.length === 0 ?
            (<Typography 
                align="center" 
                color="text.secondary"
                height="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >Aucun élement</Typography>):
            <Grid
                component="div"
                container
            >
                {
                    data?.map((file, index) => {
                        const infos = fileExtensionBase.find(({exts}) => (
                            ~exts.indexOf(getFileExtension(file.name))
                            )
                        )
                        return (
                            <Grid
                                component="div"
                                item
                                md={12/5}
                                key={index}
                            > 
                                <WrapperContent
                                    {...infos}
                                    {...file}
                                > 
                                    <Box
                                        display="flex"
                                        flex={1}
                                        justifyContent="center"
                                        alignItems="center"
                                        
                                    >
                                        <File
                                            {...infos}
                                            name={file.name}
                                            date={file.createdAt}
                                            url={file.url}
                                        /> 
                                    </Box>
                                </WrapperContent>
                            </Grid>
                        )
                    })
                }
            </Grid>}
        </Box>
    );
}