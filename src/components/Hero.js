import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Hero(){
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6
            }}>
            <Container maxWidth="sm">
                <Typography component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom>
                    About Me
                </Typography>
                <Typography variant="h5"
                            align="center"
                            color="text.secondary"
                            paragraph>
                    Say something short and catchy about the you, but not too short so folks
                    don&apos;t simply skip over it entirely.
                </Typography>
            </Container>
        </Box>
    );
}

export default Hero;
