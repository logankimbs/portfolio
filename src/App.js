import * as React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Resume from './resume.svg';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { ReactComponent as Logo } from "./logo.svg";

const ResumeButton = styled(Button)({
    color: 'rgb(96, 108, 56)',
    '&:hover': {
        backgroundColor: 'rgba(96, 108, 56, 0.158)'
    },
});

const DownloadButton = styled(Button)({
    position: "absolute",
    color: 'rgb(96, 108, 56)',
    bottom: 0,
    width: "100%",
    fontSize: "inherit",
    '&:hover': {
        backgroundColor: 'rgba(96, 108, 56, 0.158)'
    },
});

const CloseButton = styled(IconButton)({
    color: 'rgb(96, 108, 56)',
    position: "absolute",
    right: "8px",
    top: "8px",
    '&:hover': {
        backgroundColor: 'rgba(96, 108, 56, 0.158)'
    },
});

function App() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    const download = () => {
        const link = document.createElement("a");
        link.download = 'resume.pdf';
        link.href = './resume.pdf';
        link.click();
    };

    return (
        <main>
            <Logo className="logo" />
            <section className='hero'>
                <h1 className='sirname'>Website is under construction</h1>
                <p className='shortintro'>
                    Sorry for the inconvience 🙁but I'm working my tail off to get this site up and running.
                    In the mean time feel free to reach out with the provided contact information on my resume
                    or message me on any of the apps below.
                </p>
                <ResumeButton onClick={handleToggle} size="large">View Resume</ResumeButton>
            </section>
            <Dialog open={open} onClose={handleClose}>
                <img src={Resume} />
                <CloseButton aria-label="close" size="small" onClick={handleClose}>
                    <CloseIcon fontSize="inherit" />
                </CloseButton>
                <DownloadButton
                    aria-label="close"
                    sx={{
                        p: 1
                    }}
                    onClick={download}
                >
                    Download
                </DownloadButton>

            </Dialog>
        </main>
    );
}

export default App;