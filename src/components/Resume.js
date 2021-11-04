import React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';


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
            {Skills()}
        </Box>
    );
};


function Education() {
    var today = new Date();
    var year = today > new Date('2022-08-29') ? 'senior' : 'junior';
    var graduation = new Date('2023-04-21');
    var diff = graduation.getTime() - today.getTime();
    var days = Math.floor(diff / (1000 * 3600 * 24));
    var isGraduated = today.getTime() > graduation.getTime() ? true : false;
    var haveNotGraduated = `I am currently in my ${year} year at Brigham Young University pursuing a
    Bachelor’s Degree in Information Systems with a minor in Computer
    Science. As of ${today.toLocaleDateString()} I have ${days} ${determinTense(days)} until graduation.`;
    var haveGraduated = `I recieved a Bachelor’s Degree in Information Systems with a minor in Computer
    Science from Brigham Young University.`;

    return (
        <Box className='education'>
            <Typography 
                variant='h6'
                component="div">
                education
            </Typography>
            <Typography
                color="text.secondary">
                {isGraduated ? haveGraduated : haveNotGraduated}
            </Typography>
        </Box>
    )
}


function determinTense(num) {
    return num !== 1 ? 'days' : 'day';
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