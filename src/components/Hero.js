import React from 'react';
import Box from '@mui/material/Box';
import { ReactComponent as FishingSvg } from '../images/fish.svg';
import Typography from '@mui/material/Typography';

function Hero() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                <FishingSvg style={{ width: '38.5rem', height: '38.5rem' }}/>
            <Box sx={{ width: 300 }}>
                <Typography 
                    variant="h5"
                    component="div">
                    about me
                </Typography>
                <Typography 
                    color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Mauris augue neque gravida in
                    fermentum et sollicitudin. Nam at lectus urna duis convallis convallis tellus
                    id interdum. Nisi quis eleifend quam adipiscing vitae proin sagittis. Vitae
                    ultricies leo integer malesuada nunc vel risus commodo viverra.
                </Typography>
            </Box>
        </Box>
    );
};


export default Hero;