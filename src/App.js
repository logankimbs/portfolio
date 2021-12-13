import * as React from 'react';

import './utilities/styles/styles.css';

import NavigationBar from './components/NavigationBar';
import Portrait from './utilities/images/bigsurtrip.jpg';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function App() {
    const sections = ['About', 'Resume', 'Projects', 'Contact'];

    return (
        <>
            <NavigationBar sections={sections} />
            <Box component="main">
                {/* intro section */}
                <Container
                    component="section"
                    maxWidth="sm"
                    id="About"
                    sx={{
                        height: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <Typography variant="h1" component="h1">
                        Hey, I'm
                    </Typography>
                    <Typography
                        variant="h1"
                        component="h1"
                        gutterBottom
                        sx={{ color: 'primary.main' }}
                    >
                        Logan Kimball.
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="subtitle1"
                        gutterBottom
                    >
                        over 2000 years old. Richard McClintock, a Latin
                        professor at Hampden-Sydney College in Virginia, looked
                        up one of the more obscure Latin words, consectetur,
                        from a Lorem Ipsum passage, and going through the cites
                        of the word in classical literature, discovered the
                        undoubtable source.
                    </Typography>
                </Container>

                {/* about section */}
                <Container
                    component="section"
                    maxWidth="md"
                    id="About"
                    sx={{
                        height: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <Typography variant="h2">About Me</Typography>
                    <Grid container spacing={2} alignItems="flex-start">
                        <Grid item xs={12} sm={12} md={6}>
                            <Typography variant="p" component="p">
                                Contrary to popular belief, Lorem Ipsum is not
                                simply random text. It has roots in a piece of
                                classical Latin literature from 45 BC, making it
                                over 2000 years old. Richard McClintock, a Latin
                                professor at Hampden-Sydney College in Virginia,
                                looked up one of the more obscure Latin words,
                                consectetur, from a Lorem Ipsum passage, and
                                going through the cites of the word in classical
                                literature, discovered the undoubtable source.
                            </Typography>
                            <Typography variant="p" component="p">
                                Contrary to popular belief, Lorem Ipsum is not
                                simply random text. It has roots in a piece of
                                classical Latin literature from 45 BC, making it
                                over 2000 years old.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Box
                                component="img"
                                sx={{ width: '100%' }}
                                alt="windy day in big sur"
                                src={Portrait}
                            />
                        </Grid>
                    </Grid>
                </Container>

                {/* projects section */}
                <Container
                    component="section"
                    maxWidth="md"
                    id="Projects"
                    sx={{ maxHeight: '100vh' }}
                >
                    <Typography variant="h2">Projects</Typography>
                    <ProjectCard />
                </Container>

                {/* contact section */}
                <Container
                    component="section"
                    maxWidth="md"
                    id="Contact"
                    sx={{ maxHeight: '100vh' }}
                >
                    <Typography variant="h2">Contact</Typography>
                    <ContactForm />
                </Container>
            </Box>
        </>
    );
}

export default App;
