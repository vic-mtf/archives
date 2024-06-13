import { Drawer } from "@mui/material";
import PropTypes from "prop-types";

export const drawerWidth = 350;

export default function CustomDrawer({ open, children, direction }) {
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
      {" "}
      {children}
    </Drawer>
  );
}

CustomDrawer.defaultProps = {
  direction: "left",
  open: false,
  children: null,
};

CustomDrawer.propTypes = {
  direction: PropTypes.oneOf(["left", "right"]).isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
