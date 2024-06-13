import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import IconButton from "../../components/IconButton";
import { updateData } from "../../redux/data";
import PropTypes from "prop-types";
import capStr from "../../utils/capStr";

export default function NavigationMenuButton({ hide, IconProps, direction }) {
  const dir = useMemo(() => `open${capStr(direction)}`, [direction]);
  const open = useSelector((store) => store.data.navigation[dir]);
  const dispatch = useDispatch();
  const handleOpenNav = useCallback(() => {
    const data = { navigation: { [dir]: !open } };
    dispatch(updateData({ data }));
  }, [dispatch, open, dir]);

  return (
    (hide ? !open : true) && (
      <IconButton onClick={handleOpenNav} sx={{ mr: 2 }}>
        <MenuOpenOutlinedIcon fontSize='small' {...IconProps} />
      </IconButton>
    )
  );
}

NavigationMenuButton.defaultProps = {
  hide: false,
  IconProps: {},
  direction: "left",
};

NavigationMenuButton.propTypes = {
  hide: PropTypes.bool,
  IconProps: PropTypes.object,
  direction: PropTypes.oneOf(["left", "right"]).isRequired,
};
