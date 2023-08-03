import React, {useEffect, useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import {Avatar, Badge, Box, IconButton, Stack, Tooltip,} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { usePopover } from '../../hooks/hooks/use-popover';
import login from '../../assets/images/login.png'
import user from '../../assets/images/avatar-seo-hyeon-ji.png'
import { Link } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import userEvent from '@testing-library/user-event';
const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 64;

const Header = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const { onNavOpen } = props;
    const accountPopover = usePopover();
    const [ing, setIng] = useState()
    const userToken = sessionStorage.getItem("token")
    const logOut = () =>{
        sessionStorage.clear()
        window.location="/login"
    }
    useEffect(()=>{
        
        setIng(userToken)
    },[])
    



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
                      
                           {
                            (!!ing)?
                            <div>
                                <Avatar  ref={accountPopover.anchorRef} onClick={handleClick} src={user}/>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={logOut}>logout</MenuItem>
                                </Menu>
                            </div>
                            :
                            <Avatar onClick={()=>window.location.replace('/login')} ref={accountPopover.anchorRef} src={login}/> 
                           
                           }
                        
                  
                    </Stack>
                </Stack>
            </Box>
         
        </div>
    );
};

export default Header;