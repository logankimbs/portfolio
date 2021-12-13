import createTheme from '@mui/material/styles/createTheme';
import blue from '@mui/material/colors/blue';
import purple from '@mui/material/colors/purple';

const theme = createTheme({
    palette: {
        primary: {
            main: blue[500],
        },
        secondary: {
            main: purple[500],
        },
    },
    typography: {
        h1: {
            fontSize: '5rem',
            fontWeight: 700,
            lineHeight: 1,
        },
        h2: {
            fontSize: '1.875rem',
            fontWeight: 700,
            lineHeight: 1.5,
            margin: '0px 0px 10px',
        },
        h3: {
            fontSize: '1.35rem',
            lineHeight: 1.5,
            letterSpacing: '0px',
            fontWeight: 700,
            margin: '0px 0px 10px',
        },
        p: {
            margin: '0px 0px 16px',
        },
    },
});

export default theme;
