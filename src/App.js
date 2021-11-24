import * as React from 'react';
import './module.App.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const ResumeButton = styled(Button)({
    color: "rgb(96, 108, 56)",
    "&:hover": {
        backgroundColor: "rgba(96, 108, 56, 0.089)"
    }
});

function App() {
    const download = () => {
        const link = document.createElement("a");
        link.download = 'resume.pdf';
        link.href = './resume.pdf';

        link.click();
    };

    return (
        <Box sx={{ mx: 2 }}>
            <Box
                sx={{
                    mt: 10,
                    mx: "auto",
                    maxWidth: 650,
                }}
            >
                <h1>Website is under construction</h1>
                <p>
                    Sorry for the inconvience. I'm working my tail off to get this things up and running for you.
                    In the mean time feel free to reach out with the provided contact information on my resume. Hope
                    to hear from you soon.
                </p>
                <ResumeButton onClick={download} size="large">Download Resume</ResumeButton>
            </Box>
        </Box >
    );
}

export default App;