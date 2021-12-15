import * as React from 'react';

import './utilities/styles/styles.css';

import useMediaQuery from '@mui/material/useMediaQuery';
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';

import NavigationBar from './components/NavigationBar';
import portrait from './utilities/images/bigsurtrip.jpg';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function App() {
    const [loading, setLoading] = React.useState(true);
    const [projects, setProjects] = React.useState([]);

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                    transparent: {
                        primary: {
                            main: '#90caf92d',
                            dark: '',
                            light: '',
                        },
                    },
                },
                typography: {
                    h1: {
                        fontSize: 42,
                        fontWeight: 800,
                    },
                    h2: {
                        fontSize: 36,
                        fontWeight: 800,
                        marginTop: 10,
                        marginBottom: 40,
                    },
                    h3: {
                        fontSize: 20,
                        fontWeight: 700,
                        marginBottom: 10,
                    },
                    body1: {
                        fontSize: 16,
                        marginBottom: 30,
                    },
                    body2: {
                        fontSize: 14,
                        lineHeight: 1.5,
                        marginBottom: 20,
                    },
                    small: {
                        fontSize: 14,
                        fontWeight: 700,
                        marginBottom: 10,
                    },
                },
            }),
        [prefersDarkMode]
    );

    React.useEffect(() => {
        fetch('https://api.github.com/users/logankimbs/repos')
            .then((res) => res.json())
            .then((projects) => {
                setProjects(
                    projects.filter(
                        (project) =>
                            project.name === 'intex' ||
                            project.name === 'portfolio' ||
                            project.name === 'twitter-bots'
                    )
                );
            });
        setLoading(false);
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavigationBar />
            <Box component="main">
                <Container
                    component="section"
                    maxWidth="sm"
                    sx={{
                        marginTop: 'calc(52vh - 15rem)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <Box sx={{ my: '30px' }}>
                        <Typography component="h1" variant="h1">
                            Hey, I'm{' '}
                            <Typography color="primary" variant="h1">
                                Logan Kimball
                            </Typography>{' '}
                            Quick and catchy statement
                        </Typography>
                    </Box>
                    <Typography component="p" variant="body1">
                        A few sentances about me that is captivating and engages
                        the reader. Keep it short but make sure to engage the
                        reader. This paragraph is very important, dont skrew it
                        up.
                    </Typography>
                    <Box sx={{ display: 'inline-flex' }}>
                        <Button
                            size="large"
                            variant="outlined"
                            sx={{ textTransform: 'none' }}
                        >
                            Download resume
                        </Button>
                    </Box>
                </Container>

                <Container
                    component="section"
                    maxWidth="md"
                    id="about"
                    sx={{ my: '15rem' }}
                >
                    <Typography color="primary" component="h2" variant="small">
                        About me
                    </Typography>
                    <Typography
                        component="h2"
                        variant="h2"
                        sx={{ maxWidth: 500 }}
                    >
                        A catchy little fact about me thats interesting
                    </Typography>
                    <Grid container spacing={2} alignItems="flex-start">
                        <Grid item xs={12} sm={12} md={6}>
                            <Typography>
                                This is a longer sentance about me. I will talk
                                about who I am and little things like that. Like
                                where i'm from, what my profession is, what i
                                want to do with my life. It doesnt need to be
                                complicated by make it informative.
                            </Typography>
                            <Typography>
                                This is just a closing sentence to close things
                                off and introduce my projects. Nothing crazy,
                                just an outro.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Box
                                component="img"
                                width="100%"
                                alt="a windy day in big sur, california"
                                src={portrait}
                                sx={{ borderRadius: 4 }}
                            />
                        </Grid>
                    </Grid>
                </Container>

                <Container
                    component="section"
                    maxWidth="md"
                    id="projects"
                    sx={{ my: '15rem' }}
                >
                    <Typography color="primary" component="h2" variant="small">
                        Projects
                    </Typography>
                    <Typography
                        component="h2"
                        variant="h2"
                        sx={{ maxWidth: 500 }}
                    >
                        Something cool about my projects that sets me apart from
                        other people.
                    </Typography>
                    <Grid container spacing={2} alignItems="stretch">
                        {projects.map((project) => (
                            <Grid item xs={12} md={4} key={project.id}>
                                <ProjectCard project={project} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>

                <Container
                    component="section"
                    maxWidth="md"
                    id="contact"
                    sx={{ my: '15rem' }}
                >
                    <Typography color="primary" component="h2" variant="small">
                        Contact me
                    </Typography>
                    <Typography
                        component="h2"
                        variant="h2"
                        sx={{ maxWidth: 500 }}
                    >
                        Give them a reason why they should contact me. Make it
                        short and to the point.
                    </Typography>
                    <ContactForm />
                </Container>
            </Box>
        </ThemeProvider>
    );
}
