import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';


function NavBar() {
    return (
        <AppBar position='static'>
            <Container>
                <Toolbar>
                    <Typography 
                        variant='h6'
                        component='div'
                        sx={{ flexGrow: 1 }}>
                        @logankimbs
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};


export default NavBar;