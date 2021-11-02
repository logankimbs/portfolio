import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import CloseIcon from '@mui/icons-material/Close';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    root: {

    }
})


const actions = [
    { icon: <TwitterIcon/>, name: 'Twitter', onClick(){ window.open('https://twitter.com/logankimball_', '_blank') } },
    { icon: <GitHubIcon/>, name: 'GitHub', onClick(){ window.open('https://github.com/logankimbs', '_blank') } },
    { icon: <LinkedInIcon/>, name: 'LinkedIn', onClick(){ window.open('https://www.linkedin.com/in/logankimbs/', '_blank') } }
]


function SocialButton() {
    const classes = useStyles();

    return (
        <Box 
            className={classes.root}
        >
            <SpeedDial
                ariaLabel='SpeedDial'  
                style={{
                    position: 'fixed'
                }}             
                icon={
                    <SpeedDialIcon
                        openIcon={
                            <CloseIcon/>
                        }
                    />
                }
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={action.onClick}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
}


export default SocialButton;
