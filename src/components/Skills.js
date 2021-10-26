import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const skills = ['python', 'javascript', 'c++'];

function Skills() {
    return (
        <Container maxWidth="md"
                   component="main">
            <Grid container
                  spacing={5}
                  alignItems="flex-end">
                {skills.map((skill) => (
                    <Grid item
                          key={skill.title}
                          xs={12}
                          md={4}>
                        <Card>
                            <CardMedia component="svg"
                                       height="194"
                                       image=""
                                       alt={`${skill} logo`}/>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Skills;