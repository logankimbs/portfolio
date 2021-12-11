import * as React from 'react';
import emailjs from 'emailjs-com';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ContactForm() {
    const contactForm = React.useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_jr7alh8',
                'portfolio template',
                contactForm.current,
                'user_DkGnnczb30ARRQF5x4pvY'
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        e.target.reset();
    };

    return (
        <Box sx={{ textAlign: 'center', py: 3, px: 4 }}>
            <form ref={contactForm} onSubmit={sendEmail}>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={2}
                    sx={{ mb: 4 }}
                >
                    <Grid item xs={12}>
                        <TextField
                            id="name"
                            label="name"
                            name="name"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="email"
                            label="email"
                            name="email"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="message"
                            label="message"
                            name="message"
                            variant="outlined"
                            margin="normal"
                            rows={4}
                            fullWidth
                            multiline
                        />
                    </Grid>
                </Grid>
                <Button
                    variant="contained"
                    size="large"
                    type="submit"
                    sx={{ borderRadius: 6, width: '40%' }}
                >
                    Send
                </Button>
            </form>
        </Box>
    );
}
