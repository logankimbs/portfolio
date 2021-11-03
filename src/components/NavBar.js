import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


function NavBar() {
    return (
        <AppBar>
            <Toolbar>
                <Typography 
                    variant='h6'
                    component='div'
                    sx={{ flexGrow: 1 }}>
                    @logankimbs
                </Typography>
            </Toolbar>
        </AppBar>
    );
};


export default NavBar;