import React, { useMemo } from 'react';
import { BottomNavigationAction, BottomNavigation } from "@mui/material";
import { useLocation } from 'react-router-dom';
import tabs from "./tabs";
import useNavigateSetState from '../../../utils/useNavigateSetState';

export default function TabsOption () {
    const location = useLocation();
    const navigateTo = useNavigateSetState();

    const value = useMemo(() => 
            location.state?.navigation?.tabs?.option, 
        [location.state?.navigation?.tabs?.option]
    );

    const handleChange = (event, option) => {
        event?.preventDefault();
        navigateTo({
            state: { navigation: { tabs: { option }, }, }
        });
    };

    return (
        <BottomNavigation 
            sx={{ width: '100%' }} 
            value={value} 
            onChange={handleChange}
        >
            {tabs.map(({ icon, label, id }) => (
                <BottomNavigationAction 
                    icon={React.createElement(icon)} 
                    value={id}
                    key={id}
                    label={label}
                    sx={{
                        textTransform: 'none',
                    }}
                />
            ))}
        </BottomNavigation>
    );
}