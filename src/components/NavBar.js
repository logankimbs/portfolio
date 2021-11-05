import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';


function NavBar() {
    return (
        <AppBar position='static'
        color='transparent'
        sx={{ boxShadow: 'none'}}>
            <Toolbar>
                <Typography 
                    color={blue[400]}
                    variant='h5'
                    component='div'
                    sx={{ flexGrow: 1 }}>
                    LK
                </Typography>
            </Toolbar>
        </AppBar>
    );
};


export default NavBar;