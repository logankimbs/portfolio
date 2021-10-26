import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import { ReactComponent as FishingSvg } from '../images/fish.svg';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles({
    hero: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2.5rem",
        maxWidth: "68.75rem",
        margin: "auto",
    },

    svg: {
        height: "37.5rem",
        width: "37.5rem"
    },

    bio: {
        width: "25rem",
        padding: "0.625rem"
    }
});


function Hero(){
    const classes = useStyles();

    return (
        <Box 
            sx={{
                bgcolor: "background.paper",
                pt: 8,
                pb: 6
            }}>
            <Container maxWidth="md"
                       className={classes.hero}>
                <FishingSvg className={classes.svg}/>

                <div className={classes.codebox}>

                </div>
                <Typography variant="h5"
                            align="center"
                            color="text.secondary"
                            paragraph
                            className={classes.bio}>
                    <Typography variant="h4"
                                className="code">
                        ## About me
                    </Typography>
                    Say something short and catchy about the you. This introduction is really
                    important so make sure it&apos;s short but not to short. You don&apos;t want
                    folks to skip over it entirely.
                </Typography>
            </Container>
        </Box>
    );
}

export default Hero;
