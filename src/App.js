import './App.css';
import Container from '@mui/material/Container'
import NavBar from './components/NavBar';
import Hero from './components/Hero';

function App() {
    return (
        <div className='App'>
            <NavBar/>
            <Container>
                <Hero/>
            </Container>
        </div>
    );
}


export default App;
