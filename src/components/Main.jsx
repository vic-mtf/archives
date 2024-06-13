import { styled } from "@mui/material";
import PropTypes from "prop-types";

const customProps = ["openLeft", "openRight", "drawerWidth"];

const Main = styled("main", {
  shouldForwardProp: (prop) => !customProps.includes(prop),
})(({ theme, openLeft, openRight, drawerWidth }) => ({
  overflow: "hidden",
  flexGrow: 1,
  flexShrink: 1,
  flex: 1,
  display: "flex",
  flexDirection: "column",
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth * 2}px`,
  ...(openLeft && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: `-${openRight ? drawerWidth : 0}px`,
  }),
}));

Main.defaultProps = {
  open: true,
  drawerWidth: 0,
};

Main.propTypes = {
  open: PropTypes.bool,
  drawerWidth: PropTypes.number,
};

export default Main;
