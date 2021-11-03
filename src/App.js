import './App.css';
import Container from '@mui/material/Container'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Resume from './components/Resume';

function App() {
    return (
        <div className='App'>
            <NavBar/>
            <Container sx={{ pt: 4 }}>
                <Hero/>
                <Resume/>
            </Container>
        </div>
    );
}


export default App;
