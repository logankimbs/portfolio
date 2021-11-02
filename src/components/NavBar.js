import React from 'react'
import makeStyles from '@mui/styles/makeStyles';
import blue from '@mui/material/colors/blue'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


const useStyles = makeStyles({
    root: {
        backgroundColor: blue.A400,
        boxShadow: 'none'
    }
})


function NavBar() {
    const classes = useStyles();
    const [show, setShow] = React.useState(false);

    return (
        <Box 
            sx={{ flexGrow: 1 }}
        >

            {/* NAVBAR */}
            <AppBar
                className={classes.root}
                position='static'
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => setShow(prev => !prev)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Title page
                    </Typography>
                </Toolbar>
            </AppBar>


            {/* MENU */}
            {show && <Box
                sx={{
                    width: '100%',
                    bgcolor: blue.A400
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
            </Box>}
        </Box>
    );
}


export default NavBar;
