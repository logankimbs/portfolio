import React from 'react';
import blue from '@mui/material/colors/blue';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


const colors = {
    primary: blue[400]
}


function NavBar() {
    const [show, setShow] = React.useState(false);

    return (
        <Box 
            sx={{
                flexGrow: 1
            }}
        >
            <AppBar
                sx={{
                    bgcolor: colors.primary,
                    boxShadow: 'none'
                }}
                position='static'
            >
                <Toolbar>
                    <ClickAwayListener 
                        onClickAway={() => setShow(false)}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{
                                mr: 2 
                            }}
                            onClick={() => setShow(prev => !prev)}
                        >
                            {!show ? <MenuIcon/> : <CloseIcon/>}
                        </IconButton>
                    </ClickAwayListener>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1
                        }}
                    >
                        Logan Kimball
                    </Typography>
                </Toolbar>
            </AppBar>
            {show &&
                <Box
                    sx={{
                        width: '100%',
                        bgcolor: colors.primary
                    }}
                >
                    <nav 
                        aria-label='main navigation list'
                    >
                        <List
                            sx={{
                                color: '#ffffff'
                            }}
                        >
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary='About'/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary='Resume'/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary='Projects'/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary='Contact'/>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </nav>
                </Box>
            }
        </Box>
    );
}


export default NavBar;
