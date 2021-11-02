import React from 'react'
import Box from '@mui/material/Box'
import { ReactComponent as FishingSvg } from '../images/fish.svg';
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
            className={classes.hero} 
            sx={{
                 bgcolor: "background.paper",
                 pt: 8,
                 pb: 6
            }}
        >
            <FishingSvg className={classes.svg}/>
        </Box>
    );
}

export default Hero;
