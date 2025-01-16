import { Toolbar, Box as MuiBox, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import Main from "../../components/Main";
import UnderHeader from "./under-header/UnderHeader";
import { drawerWidth } from "../navigation/CustomDrawer";
import DisplayData from "./display-data/DisplayData";

export default function Content() {
  const openLeft = useSelector((store) => store.data.navigation.openLeft);
  const openRight = useSelector((store) => store.data.navigation.openRight);

  return (
    <Main openLeft={openLeft} openRight={true} drawerWidth={drawerWidth}>
      <Toolbar variant='dense' />
      <UnderHeader />

      <MuiBox overflow='hidden' display='flex' flexShrink={0} flex={1}>
        <DisplayData />
      </MuiBox>
    </Main>
  );
}
