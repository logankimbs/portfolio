import createTheme from '@mui/material/styles/createTheme';

const theme = createTheme({
    palette: {
        primary: {
            main: '#3D348B',
        },
        secondary: {
            main: '#E6AF2E',
        },
    },
    typography: {
        h1: {
            margin: '20px 0px',
            fontFamily:
                'PlusJakartaSans-ExtraBold, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            fontSize: 'clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)',
            fontWeight: 800,
            lineHeight: 1.11429,
            maxWidth: '500px',
        },

        smallh2: {
            margin: '0px 0px 10px',
            fontSize: '0.875rem',
            lineHeight: 1.5,
            fontWeight: 700,
        },

        h2: {
            margin: '10px 0px',
            fontFamily:
                'PlusJakartaSans-ExtraBold, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            fontSize: 'clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)',
            fontWeight: 800,
            lineHeight: 1.22222,
        },

        h3: {
            marginBottom: '10px',
            fontSize: '0.875rem',
            lineHeight: 1.5,
            letterSpacing: '0px',
            fontWeight: 700,
        },

        h6: {
            fontFamily:
                'PlusJakartaSans-ExtraBold, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            fontWeight: 900,
            fontSize: 'clamp(2.3rem, 1rem + 1vw, 4rem)',
        },

        body1: {
            margin: '0px 0px 30px',
            fontSize: '1rem',
            lineHeight: 1.5,
            letterSpacing: '0px',
            fontWeight: 400,
            maxWidth: '500px',
        },

        body2: {
            margin: '0px',
            fontSize: '0.875rem',
            lineHeight: 1.5,
            letterSpacing: '0px',
            fontWeight: 400,
        },
    },
});

export default theme;
