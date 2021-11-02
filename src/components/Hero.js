import React from 'react';
import Container from '@mui/material/Container';
import { ReactComponent as FishingSvg } from '../images/fish.svg';
import About from './About';


function Hero(){
    return (
        <Container
            sx={{
                mb: 12
            }}>
            <FishingSvg
                style={{
                    padding: '16px',
                    width: '100%',
                    height: '40%',
                    marginBottom: '96px'
                }}
            />
            <About/>
        </Container>
    );
}


export default Hero;
