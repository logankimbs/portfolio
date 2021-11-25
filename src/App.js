import * as React from 'react';
import './module.App.css';
import Button from '@mui/material/Button';
import { ReactComponent as Logo } from "./logo.svg";
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const ResumeButton = styled(Button)({
    color: "rgba(0, 0, 0, 0.8)",
    "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.089)"
    }
});

function App() {
    const download = () => {
        const link = document.createElement("a");
        link.download = "resume.pdf";
        link.href = "./resume.pdf";

        link.click();
    };

    return (
        <main className="hero-container">
            <Logo className="logo" />
            <Box className="hero">
                <h1>Website is under construction</h1>
                <p>
                    Sorry for the inconvience. I'm working hard to get my site up and running for you.
                    In the mean time feel free to reach out with the provided contact information on my resume. Hope
                    to hear from you soon.
                </p>
                <ResumeButton
                    onClick={download}
                    size="large"
                    className="shake-horizontal"
                >
                    Download Resume
                </ResumeButton>
            </Box>
        </main >
    );
}

export default App;