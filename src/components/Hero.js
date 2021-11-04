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
                    I love a good podcast, interesting conversation, and an unassuming win (especially in tennis).
                    Rick and Morty always make me laugh. Skateboarding, surfing, fishing, and mountain biking give me meaning.
                    I’m a big fan of yard work.
                </Typography>
            </Box>
        </Box>
    );
};


export default Hero;