import { useEffect, useMemo } from "react";
import { Toolbar, Box as MuiBox, Divider } from "@mui/material";
import TreeArchiveManagementView from "./tree-data-view/TreeArchiveManagementView";
import SearchInput from "../../components/SearchInput";
import Typography from "../../components/Typography";
import { useSelector } from "react-redux";
import TabsOption from "./tabs-option/TabsOption";
import NavigationMenuButton from "./NavigationMenuButton";
import useNavigateSetState from "../../utils/useNavigateSetState";
import { useLocation } from "react-router-dom";
import CustomDrawer from "./CustomDrawer";

export default function LeftNavigation() {
  const open = useSelector((store) => store.data.navigation.openLeft);
  const auth = useSelector((store) => store.user.auth);
  const location = useLocation();
  const navigateTo = useNavigateSetState();
  const optionIsNull = useMemo(
    () => [null, undefined].includes(location.state?.navigation?.tabs?.option),
    [location.state?.navigation?.tabs?.option]
  );

  useEffect(() => {
    if (optionIsNull) {
      const archiveApp = auth.privileges.find(({ app }) => app === "archives");
      const isWritten = archiveApp.permissions.find(
        ({ access }) => access === "write"
      );
      if (isWritten)
        navigateTo({
          state: { navigation: { tabs: { option: "archiveManager" } } },
        });
    }
  }, [auth, navigateTo, optionIsNull]);

  return (
    <CustomDrawer open={open}>
      <Toolbar variant='dense' />
      <Toolbar variant='dense'>
        <NavigationMenuButton />
        <Typography fontWeight='bold'>Fichiers</Typography>
      </Toolbar>
      <Divider />
      <MuiBox>
        <TabsOption />
        <Toolbar variant='dense'>
          <SearchInput />
        </Toolbar>
      </MuiBox>
      <Divider />
      <MuiBox
        overflow='hidden'
        display='flex'
        flexGrow={1}
        flexDirection='column'>
        <TreeArchiveManagementView />
      </MuiBox>
    </CustomDrawer>
  );
}
