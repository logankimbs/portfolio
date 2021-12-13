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
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import Link from '@mui/material/Link';

function App() {
    const sections = ['About', 'Projects', 'Contact'];

    return (
        <>
            <NavigationBar sections={sections} />
            <Box component="main">
                {/* intro section */}
                <Container
                    component="section"
                    maxWidth="sm"
                    sx={{
                        height: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <Typography component="h1" variant="h1">
                        Hey, I'm{' '}
                        <Typography
                            component="span"
                            variant="h1"
                            color="primary.main"
                        >
                            Logan Kimball
                        </Typography>
                    </Typography>
                    <Typography component="p" variant="body1">
                        over 2000 years old. Richard McClintock, a Latin
                        professor at Hampden-Sydney College in Virginia, looked
                        up one of the more obscure Latin words, consectetur,
                        from a Lorem Ipsum passage, and going through the cites
                        of the word in classical literature, discovered the
                        undoubtable source.
                    </Typography>

                    <Button
                        variant="contained"
                        size="large"
                        startIcon={<DownloadIcon />}
                        sx={{
                            textTransform: 'none',
                            fontWeight: 700,
                            fontSize: '1rem',
                            py: 1.5,
                        }}
                    >
                        download resume
                    </Button>
                </Container>

                {/* about section */}
                <Container
                    component="section"
                    maxWidth="md"
                    id="About"
                    sx={{ mb: '20vh' }}
                >
                    <Typography
                        component="h2"
                        variant="smallh2"
                        color="primary"
                    >
                        About
                    </Typography>
                    <Typography component="h2" variant="h2">
                        Just a little something special, but not too long{' '}
                        <Typography
                            component="span"
                            variant="h2"
                            color="primary.main"
                        >
                            software engineer
                        </Typography>
                    </Typography>
                    <Grid container spacing={2} alignItems="flex-start">
                        <Grid item xs={12} sm={12} md={6}>
                            <Typography component="p" variant="body1">
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
                            <Typography component="p" variant="body1">
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
                    sx={{ mb: '20vh' }}
                >
                    <Typography
                        component="h2"
                        variant="smallh2"
                        color="primary"
                    >
                        Projects
                    </Typography>
                    <Typography component="h2" variant="h2" mb={2.5}>
                        Just a little something special, but not too long about{' '}
                        <Typography
                            component="span"
                            variant="h2"
                            color="primary.main"
                        >
                            cool projects
                        </Typography>
                    </Typography>

                    <Grid container spacing={2} alignItems="flex-start">
                        <Grid item xs={12} md={4}>
                            <ProjectCard />
                        </Grid>
                    </Grid>
                </Container>

                {/* contact section */}
                <Container
                    component="section"
                    maxWidth="md"
                    id="Contact"
                    sx={{ mb: '50vh' }}
                >
                    <Typography component="h2" variant="h2">
                        Contact
                    </Typography>
                    <ContactForm />
                </Container>
            </Box>
        </>
    );
}

export default App;
