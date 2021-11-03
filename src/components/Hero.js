import React from 'react';
import Box from '@mui/material/Box';
import { ReactComponent as FishingSvg } from '../images/fish.svg';
import Typography from '@mui/material/Typography';


function Hero() {
    return (
        <Box className='hero'>
            <FishingSvg 
                className='fishing-svg'
                style={{ height: '26.5rem', width: '26.5rem' }}/>
            <Box className='about'>
                <Typography 
                    variant='h6'
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