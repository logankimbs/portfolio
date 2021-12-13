import createTheme from '@mui/material/styles/createTheme';

const theme = createTheme({
    palette: {
        primary: {
            main: '#3D348B',
        },
        secondary: {
            main: '#E6AF2E',
        },
        third: {
            black: '#191716',
            white: '#E0E2DB',
            bone: '#BEB7A4',
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
            fontFamily:
                '"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            fontWeight: 400,
            maxWidth: '500px',
        },
    },
});

export default theme;
