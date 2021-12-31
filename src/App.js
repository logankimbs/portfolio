import * as React from "react";

import "./utilities/styles/styles.css";

import useMediaQuery from "@mui/material/useMediaQuery";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";

import NavigationBar from "./components/NavigationBar";
import portrait from "./utilities/images/bigsurtrip.jpg";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function App() {
  const [loading, setLoading] = React.useState(true);
  const [projects, setProjects] = React.useState([]);

  const download = () => {
    const link = document.createElement("a");
    link.download = "resume.pdf";
    link.href = "./resume.pdf";
    link.click();
  };

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          transparent: {
            primary: {
              main: "#90caf918",
            },
            success: {
              main: "#81c78418",
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
    fetch("https://api.github.com/users/logankimbs/repos")
      .then((res) => res.json())
      .then((projects) => {
        setProjects(
          projects.filter(
            (project) =>
              project.name === "intex" ||
              project.name === "portfolio" ||
              project.name === "twitter-bots"
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
          id="home"
          sx={{
            paddingTop: "calc(52vh - 15rem)",
            paddingBottom: "7.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box sx={{ my: "30px" }}>
            <Typography component="h1" variant="h1">
              Hey, I'm
            </Typography>
            <Typography component="h1" variant="h1" color="primary.main">
              Logan Kimball
            </Typography>
            <Typography component="h1" variant="h1">
              and I'm a software developer.
            </Typography>
          </Box>
          <Typography component="p" variant="body1" sx={{ mb: "30px" }}>
            With over two years of professional experience building and
            maintaining complex applications while concurrently pursuing a
            bachelor's degree in information systems and a minor in computer
            science, I am confident that my passion and expertise will be of
            value to your company.
          </Typography>
          <Box sx={{ display: "inline-flex" }}>
            <Button
              size="large"
              variant="outlined"
              color="primary"
              sx={{ textTransform: "none" }}
              onClick={download}
            >
              Download resume
            </Button>
          </Box>
        </Container>

        <Container
          component="section"
          maxWidth="md"
          id="about"
          sx={{ py: "7.5rem" }}
        >
          <Typography color="primary" component="h2" variant="small">
            About me
          </Typography>
          <Typography component="h2" variant="h2" sx={{ maxWidth: 500 }}>
            Being focused and driven are common adjectives in my vocabulary.
          </Typography>
          <Grid container spacing={2} alignItems="flex-start">
            <Grid item xs={12} sm={12} md={6}>
              <Typography component="p" variant="body1" sx={{ mb: "30px" }}>
                From a young age, I developed a passion for solving complex
                unstructured problems. I always knew that I needed to
                incorporate my gifts with my career. I have a lot to offer. I’m
                an early riser, always have been. I love the peace and quiet
                that comes with every sunrise.
              </Typography>
              <Typography component="p" variant="body1" sx={{ mb: "30px" }}>
                You should know that I’m a do-it-yourself kind of a guy. In
                fact, if I find something that needs repair, I learn how to fix
                it. (YouTube is my friend.) And I’m not afraid to ask for help.
                I have a lot to offer. I’ve been known to chase my dreams.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box
                component="img"
                width="100%"
                alt="a windy day in big sur, california"
                src={portrait}
                sx={{ borderRadius: 4, opacity: 0.8 }}
              />
            </Grid>
          </Grid>
        </Container>

        <Container
          component="section"
          maxWidth="md"
          id="projects"
          sx={{ py: "7.5rem" }}
        >
          <Typography color="primary" component="h2" variant="small">
            Projects
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
          sx={{ py: "7.5rem" }}
        >
          <Typography color="primary" component="h2" variant="small">
            Contact me
          </Typography>
          <Typography component="h2" variant="h2" sx={{ maxWidth: 500 }}>
            Reach out. <br /> I'd love to have a chat.
          </Typography>
          <ContactForm />
        </Container>

        <Divider light sx={{ mt: "7.5rem" }} />

        <Container component="footer" maxWidth="xl">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            paddingTop={5}
            paddingBottom={5}
          >
            <Typography
              component="p"
              color="text.secondary"
              variant="body2"
              marginBottom={0}
            >
              Copyright © {new Date().getFullYear()} Logan Kimball
            </Typography>

            <Box>
              <Box display="flex" flexDirection="row">
                <IconButton
                  size="large"
                  color="inherit"
                  href="https://github.com/logankimbs"
                  target="_blank"
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  size="large"
                  color="inherit"
                  href="https://twitter.com/logankimball_"
                  target="_blank"
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton
                  size="large"
                  color="inherit"
                  href="https://www.linkedin.com/in/logankimbs/"
                  target="_blank"
                >
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
