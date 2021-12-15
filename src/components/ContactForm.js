import * as React from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from 'emailjs-com';

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ContactForm() {
    const [openAlert, setOpenAlert] = React.useState(null);
    const contactForm = React.useRef();

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Please enter your name'),
        email: Yup.string()
            .required('Please enter your email')
            .email('Please enter a valid email'),
        message: Yup.string().required('Please enter a short message'),
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ resolver: yupResolver(validationSchema) });

    const onSubmit = () => {
        emailjs
            .sendForm(
                process.env.REACT_APP_EMAIL_SERVICE_ID,
                process.env.REACT_APP_EMAIL_TEMPLATE_ID,
                contactForm.current,
                process.env.REACT_APP_EMAIL_USER_ID
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setOpenAlert(true);
                    reset('');
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <Box>
            {openAlert ? (
                <Alert
                    severity="success"
                    icon={<CheckIcon fontSize="inherit" />}
                    variant="outlined"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpenAlert(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2, backgroundColor: 'transparent.success.main' }}
                >
                    Your message sent successfully!
                </Alert>
            ) : null}
            <Box
                component="form"
                ref={contactForm}
                onSubmit={handleSubmit(onSubmit)}
            >
                <TextField
                    id="name"
                    label="Name"
                    name="name"
                    variant="filled"
                    size="small"
                    margin="normal"
                    sx={{
                        '.MuiFilledInput-root': {
                            backgroundColor: 'transparent.primary.main',
                        },
                    }}
                    fullWidth
                    {...register('name')}
                    error={errors.name ? true : false}
                    helperText={errors.name?.message}
                />

                <TextField
                    id="email"
                    label="Email"
                    name="email"
                    variant="filled"
                    size="small"
                    margin="normal"
                    sx={{
                        '.MuiFilledInput-root': {
                            backgroundColor: 'transparent.primary.main',
                            borderBottom: 'primary.main',
                        },
                    }}
                    fullWidth
                    {...register('email')}
                    error={errors.email ? true : false}
                    helperText={errors.email?.message}
                />

                <TextField
                    id="message"
                    label="Message"
                    name="message"
                    placeholder="Write a short message"
                    variant="filled"
                    size="small"
                    margin="normal"
                    sx={{
                        '.MuiFilledInput-root': {
                            backgroundColor: 'transparent.primary.main',
                        },
                    }}
                    fullWidth
                    multiline
                    {...register('message')}
                    rows={4}
                    error={errors.message ? true : false}
                    helperText={errors.message?.message}
                />

                <Button
                    variant="outlined"
                    type="submit"
                    color="primary"
                    sx={{ textTransform: 'capitalize', my: 3, borderRadius: 2 }}
                >
                    Submit
                </Button>
            </Box>
        </Box>
    );
}
