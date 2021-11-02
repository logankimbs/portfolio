import * as React from 'react';
import makeStyles from '@mui/styles/makeStyles'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { ReactComponent as PythonIcon } from '../images/python-icon.svg';
import { ReactComponent as JsIcon } from '../images/js-icon.svg';
import { ReactComponent as CppIcon } from '../images/cpp-icon.svg';
import { ReactComponent as TsIcon } from '../images/ts-icon.svg';


const useStyles = makeStyles({
    skills: {
        maxWidth: '68.75rem',
        margin: 'auto',
        textAlign: 'center',
        marginTop: '2.5rem',
    },

    icon: {
        width: '11.874rem',
        height: '11.25rem'
    }
});


function Skills() {
    const classes = useStyles();

    return (
        <Box className={classes.skills}>
            <SkillCard>
                <PythonIcon className={classes.icon}/>
            </SkillCard>
            <SkillCard>
                <JsIcon className={classes.icon}/>
            </SkillCard>
            <SkillCard>
                <CppIcon className={classes.icon}/>
            </SkillCard>
            <SkillCard>
                <TsIcon className={classes.icon}/>
            </SkillCard>
        </Box>
    );
}


function SkillCard(props) {
    const { sx, ...other } = props;
    return (
        <Card
            raised
            component='span'
            sx={{
                display: 'inline-block',
                mx: '5px',
                p: 2,
                transform: 'scale(0.8)' 
            }}
            {...other}
        />
    );
}


export default Skills;