import * as React from 'react';
import grey from '@mui/material/colors/grey';
import makeStyles from '@mui/styles/makeStyles'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const colors = {
    dark: grey[900],
    medium: grey.A700,
    light: grey.A400
}


const useStyles = makeStyles({
    lineNumber: {
        paddingRight: '14px',
        color: colors.light
    }
});


function CodeBox() {
    const classes = useStyles();

    return (
        <Box sx={{ fontFamily: 'Monospace' }}>
            <Card raised>
                <CardHeader
                    sx={{ 
                        backgroundColor: colors.light,
                        color: colors.dark
                    }}
                    title={
                        <Typography sx={{ fontFamily: 'Monospace' }}>
                            logankimball 
                            <span style={{ color: colors.medium }}> / </span>
                            README
                            <span style={{ color: colors.medium }}>.md</span>
                        </Typography>
                    }
                />
                <CardContent>
                    {displayReadme(classes)}
                </CardContent>
            </Card>
        </Box>
    );
}


function displayReadme(classes) {
    const list = [
        `Hi, I’m @logankimbs`,
        'I’m interested in ...',
        'I’m currently learning ...',
        'I’m looking to collaborate on ...',
        ''
    ];

    return (
        list.map((item, index) => {
            return (
                <Box
                    key={index} 
                    sx={{ lineHeight: 1.8, padding: 'none' }}
                >
                    <span className={classes.lineNumber}>{++index}</span>
                    {item}
                </Box>
            )
        })
    );
}


export default CodeBox;