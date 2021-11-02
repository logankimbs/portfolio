import './App.css';
import makeStyles from '@mui/styles/makeStyles';
import Box from '@mui/material/Box';
import NavBar from './components/NavBar';
import Paper from '@mui/material/Paper';
import About from './components/About';


const useStyles = makeStyles({
    root: {
        borderRadius: '16px 16px 0px 0px'
    }
})


function App() {
    const classes = useStyles();

    return (
        <div className='App'>
            <Box>
                {/* navbar and menu */}
                <NavBar/>
                <Paper
                    className={classes.root}
                    sx={{
                        p: 2
                    }}
                >
                    <About/>    
                </Paper>
            </Box>
        </div>
    );
}


export default App;
