import { Box } from "@mui/material"
import Typography from "../../../../components/Typography"
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

export default function Video (props) {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
        >
            <Box
                mb={1}
                sx={{ 
                    boxShadow: 5, 
                    display: 'flex',
                    justifyContent:"center",
                    alignItems: 'center',
                    position: 'relative'
                }}
            >
                <Box
                    component="video"
                    preload='metadata'
                    sx={{
                        width: "100%",
                        border: theme => `1px solid ${theme.palette.background.paper}`
                    }}
                    src={props.url}
                />
                <PlayArrowRoundedIcon
                    sx={{
                        color: "white",
                        position: 'absolute',
                        left: '10px',
                        bottom: '10px'
                    }}
                    fontSize="large"
                />
            </Box>
            <Typography
                align="center"
                sx={{
                    display: '-webkit-box',
                    width: "100%",
                    maxWidth: 200,
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                }}
            >
                {props.name?.replace(/_/ig, ' ')}
            </Typography>
        </Box>
    )
}
