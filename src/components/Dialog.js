import { Dialog as MuiDialog, styled } from "@mui/material"



const Dialog = styled(MuiDialog)(({ theme }) => ({
    "& .MuiBackdrop-root": {
        backgroundColor:  theme.palette.background.paper + 
        theme.customOptions.opacity,
       // border: `1px solid ${theme.palette.divider}`,
        backdropFilter: `blur(${theme.customOptions.blur})`,
    }
}));

export default Dialog;