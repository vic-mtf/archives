import { Box } from "@mui/material";
import Typography from "../../../../components/Typography";

export default function Photo (props) {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
        >
            <Box
                p={.2}
                mb={1}
                sx={{ 
                    boxShadow: 5, 
                    display: 'flex',
                    justifyContent:"center",
                    alignItems: 'center',
                    borderRadius: 2,
                    bgcolor: theme => theme.palette.background.paper
                }}
            >
                <Box
                    component="img"
                    src={props.url}
                    srcSet={props.url}
                    loading="lazy"
                    sx={{
                        width: "100%",
                        borderRadius: 2,
                        border: theme => `2px solid ${theme.palette.divider}`
                    }}
                />
            </Box>
            <Typography
                align="center"
                sx={{
                    display: '-webkit-box',
                    maxWidth: 200,
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    width: "100%",
                }}
            >
                {props.name?.replace(/_/ig, ' ')}
            </Typography>
        </Box>
    )
}