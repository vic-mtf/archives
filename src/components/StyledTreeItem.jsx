import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import StyledTreeItemRoot from "./StyledTreeItemRoot";
import PropTypes from "prop-types";

const StyledTree = (
  {
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    colorForDarkMode,
    bgColorForDarkMode,
    ...other
  },
  ref
) => {
  const theme = useTheme();

  return (
    <StyledTreeItemRoot
      style={{
        "--tree-view-color":
          theme.palette.mode !== "dark" ? color : colorForDarkMode,
        "--tree-view-bg-color":
          theme.palette.mode !== "dark" ? bgColor : bgColorForDarkMode,
      }}
      label={
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 0.5,
            pr: 0,
          }}>
          <Box component={LabelIcon} color='inherit' sx={{ mr: 1 }} />
          <Typography sx={{ fontWeight: "inherit", flexGrow: 1 }}>
            {labelText}
          </Typography>
          <Typography variant='caption' color='inherit'>
            {labelInfo}
          </Typography>
        </Box>
      }
      {...other}
      ref={ref}
    />
  );
};
const StyledTreeItem = React.forwardRef(StyledTree);
StyledTree.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string,
  colorForDarkMode: PropTypes.string,
  bgColorForDarkMode: PropTypes.string,
};
export default StyledTreeItem;
