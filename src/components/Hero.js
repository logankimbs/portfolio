import React from 'react';
import Box from '@mui/material/Box';
import { ReactComponent as FishingSvg } from '../images/fish.svg';
import { createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';

function Hero() {
    return (
        <Box className='hero'>
            {/* <FishingSvg 
                className='fishing-svg'
                style={{ height: '26.5rem', width: '26.5rem' }}/> */}
            <Box className='about'>
                <Typography
                    mb={1.5} 
                    color={blue[400]}
                    sx={{ fontFamily: 'monospace' }}
                    component="div">
                    Hey, my name is
                </Typography>
                <Typography 
                    variant='h4'
                    mb={1.5}
                    sx={{
                        color: 'rgba(255,255,255, 0.8)'
                    }}
                    component="div">
                    Logan Kimball.
                </Typography>
                <Typography 
                    variant='h4'
                    component="div"
                    style={{
                        color: 'rgba(255, 255, 255, 0.5)'
                    }}
                    mb={2}>
                    I'm an aspiring software engineer.
                </Typography>
                <Typography
                    style={{
                        color: 'rgba(255, 255, 255, 0.5)'
                    }}>
                    I love a good podcast, interesting conversation, and an unassuming win (especially in tennis).
                    Rick and Morty always make me laugh. Skateboarding, surfing, fishing, and mountain biking give me meaning.
                    I’m a big fan of yard work.
                </Typography>
            </Box>
        </Box>
    );
};


export default Hero;