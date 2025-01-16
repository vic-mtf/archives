import { Drawer } from "@mui/material";
import PropTypes from "prop-types";

export const drawerWidth = 350;

export default function CustomDrawer({
  direction = "left",
  open = false,
  children = null,
}) {
  return (
    <Drawer
      variant='persistent'
      open={open}
      anchor={direction}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          background: "none",
          overflow: "hidden",
        },
      }}>
      {children}
    </Drawer>
  );
}

CustomDrawer.propTypes = {
  direction: PropTypes.oneOf(["left", "right"]),
  open: PropTypes.bool,
  children: PropTypes.node,
};
