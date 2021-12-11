import * as React from 'react';

import './utilities/styles/styles.css';

import NavigationBar from './components/NavigationBar';

const sections = ['About', 'Resume', 'Projects', 'Contact'];

function App() {
    return <NavigationBar sections={sections} />;
}

export default App;
