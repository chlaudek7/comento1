import React, {useEffect, useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import {Avatar, Badge, Box, IconButton, Stack, Tooltip,} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { usePopover } from '../../hooks/hooks/use-popover';
import login from '../../assets/images/login.png'

import { Link } from "react-router-dom";
const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 64;

const Header = (props) => {
    const { onNavOpen } = props;
    const accountPopover = usePopover();
   



    return (
        <div className='main_container'>
            <Box
                component="header"
                sx={{
                    backdropFilter: 'blur(6px)',
                    backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8),
                    position: 'sticky',
                    left: {lg: `${SIDE_NAV_WIDTH}px`},
                    top: 0,
                    zIndex: (theme) => theme.zIndex.appBar
                }}
            >
                <Stack alignItems="center" direction="row" justifyContent="space-between" spacing={2} sx={{minHeight: TOP_NAV_HEIGHT, px: 2}}>
                    <Stack alignItems="center" direction="row" spacing={2}>
                        <Link to="/login">
                        <IconButton onClick={onNavOpen}>
                            <MenuIcon />
                        </IconButton>
                        </Link>
                        <Tooltip title="Search">
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                    <Stack alignItems="center" direction="row" spacing={2}>
                        <Tooltip title="Notifications">
                            <IconButton>
                                <Badge badgeContent={4} color="success" variant="dot">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                        </Tooltip>
                      
                            <Avatar onClick={()=>window.location.replace('/login')} ref={accountPopover.anchorRef} src={login}/>
                        
                  
                    </Stack>
                </Stack>
            </Box>
         
        </div>
    );
};

export default Header;