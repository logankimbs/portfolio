import './App.css';
import Box from '@mui/material/Box';
import NavBar from './components/NavBar';
import Paper from '@mui/material/Paper';
import Hero from './components/Hero';
import SocialButton from './components/SocialButton';


function App() {
    return (
        <div className='App'>
            <Box
                sx={{
                    height: '100%',
                    transform: 'translateZ(0px)',
                    flexGrow: 1
                }}
            >
                <NavBar/>
                <Paper
                    elevation={0}
                    sx={{
                        width: 1,
                        px: 2,
                        pt: 4,
                        borderRadius: '16px 16px 0 0',
                        mx: 'auto',
                        pb: 4
                    }}
                >
                    <Hero/>
                    <SocialButton/>
                </Paper>
            </Box>
        </div>
    );
}


export default App;
