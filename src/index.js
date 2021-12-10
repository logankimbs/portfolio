import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "./utilities/styles/theme";

import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
)