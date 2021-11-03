import React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { Divider } from '@mui/material';


const skills = [
    {title: 'JavaScript', color: 'primary'},
    {title: 'C++', color: 'primary'},
    {title: 'Python', color: 'primary'},
    {title: 'SQL', color: 'primary'},
    {title: 'Git', color: 'primary'},
    {title: 'Data Structures', color: 'success'},
    {title: 'Machine Learning', color: 'success'},
    {title: 'Project Management', color: 'success'},
    {title: 'Database Management', color: 'success'},
    {title: 'Data Security', color: 'success'},
    {title: 'Integrity', color: 'default'},
    {title: 'Teamwork', color: 'default'},
    {title: 'Critical Thinking', color: 'default'},
    {title: 'Problem Solving', color: 'default'},
    {title: 'Organization', color: 'default'},
    {title: 'Communication', color: 'default'},
    {title: 'Adaptability', color: 'default'},
    {title: 'Dependability', color: 'default'},
]


function Resume() {
    return (
        <Box>
            {Education()}
            <Divider sx={{ mb: 6 }}/>
            {Skills()}
        </Box>
    );
};


function Education() {
    return (
        <Box>
            
        </Box>
    )
}


function Skills() {
    return (
        <Box className='skills'>
            {skills.map((skill) => (
                <Chip
                    color={skill.color}
                    className='skill'
                    label={skill.title}/>
            ))}
        </Box>
    );
};


export default Resume;