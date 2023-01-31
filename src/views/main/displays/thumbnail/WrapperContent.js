import { 
    ListItemButton, 
    ListItemIcon, 
    ListItemText, 
    Menu, 
    MenuItem 
} from '@mui/material';
import React, { useState } from 'react';
import actions from './actions';
export default function WrapperContent ({children, createdAt, name, type, url}) {
    const date = new Date(createdAt);
    const [contextMenu, setContextMenu] = useState(null);

    const handleContextMenu = event => {
      event.preventDefault();
      setContextMenu(
        contextMenu === null
          ? {
              mouseX: event.clientX + 2,
              mouseY: event.clientY - 6,
            }
          : null,
      );
    };
  
    const handleClose = () => {
      setContextMenu(null);
    };

    return (
        <React.Fragment>
            <ListItemButton
                sx={{
                    display: 'flex',
                    flex: 1,
                    borderRadius: 2,
                }}
                title={`Nom: ${name}\nType: ${type}\nDate: ${
                    date.toLocaleDateString(undefined, options)
                    }`
                }
                onContextMenu={handleContextMenu}
                LinkComponent="a"
                target="_blank"
                href={url}
            >
                {children}
            </ListItemButton>
            <Menu
                open={contextMenu !== null}
                onClose={handleClose}
                anchorReference="anchorPosition"
                variant="menu"
                MenuListProps={{
                    dense: true
                }}
                PaperProps={{
                    sx: {
                        bgcolor: theme => theme.palette.background.paper +
                        theme.customOptions.opaticy,
                        backdropFilter: theme => `blur(${theme.customOptions.blur})`
                    }
                }}
                anchorPosition={
                contextMenu !== null
                    ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
                    : undefined
                }
            >
                {actions.map((action, index) => (
                    <MenuItem key={index} disabled={action.disabled}>
                        <ListItemIcon>
                            {action.icon}
                        </ListItemIcon>
                        <ListItemText
                            primary={action.label}
                        />
                    </MenuItem>
                ))}
            </Menu>
        </React.Fragment>
    );
}

const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
};