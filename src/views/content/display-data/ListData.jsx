import React from "react";
import {
  ListSubheader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";
import FolderZipOutlinedIcon from "@mui/icons-material/FolderZipOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import CollapseListItemButton from "../../../components/CollapseListItemButton";
import formatDate from "../../../utils/formatTime";
import timeElapsed from "../../../utils/timeElapsed";
import capStr from "../../../utils/capStr";
import PropTypes from "prop-types";
export default function ListData({ doc }) {
  return (
    <List
      sx={{ width: "100%" }}
      disablePadding
      component='nav'
      aria-labelledby='doc-list-information'
      subheader={
        <ListSubheader
          component='div'
          id='doc-list-information'
          sx={{ py: 0.5, display: "flex", bgcolor: "background.default" }}>
          <Box flexGrow={1}>{doc?.designation}</Box>
          <Box>{capStr(timeElapsed(doc?.createdAt))}</Box>
        </ListSubheader>
      }>
      <ListItem title='Dossier'>
        <ListItemIcon>
          <FolderZipOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary={doc.folder.name} />
      </ListItem>
      <ListItem title='Date de la création'>
        <ListItemIcon>
          <EditCalendarOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary={formatDate(doc?.createdAt)} />
      </ListItem>
      <ListItem title='Dernière date de modification'>
        <ListItemIcon>
          <WorkHistoryOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary={formatDate(doc?.updatedAt)} />
      </ListItem>
      <CollapseListItemButton
        getPrimaryText={(open) => `${open ? "Moins" : "Plus"} d'infomation`}>
        <List>
          <ListItem>
            <ListItemText primary='Type:' />
            <Typography>{doc.type.type}</Typography>
          </ListItem>
          <ListItem>
            <ListItemText primary='Profil:' />
            <Typography>____</Typography>
          </ListItem>
          <ListItem>
            <ListItemText primary='Mots clés:' />
            <Typography>____</Typography>
          </ListItem>
          <ListItem>
            <ListItemText primary='Référence:' />
            <Typography>____</Typography>
          </ListItem>
          <ListItem>
            <ListItemText primary='Déscription:' secondary={doc.description} />
          </ListItem>
        </List>
      </CollapseListItemButton>
    </List>
  );
}

ListData.propTypes = {
  doc: PropTypes.object,
};
