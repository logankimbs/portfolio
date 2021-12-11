import * as React from 'react';

import './utilities/styles/styles.css';

import NavigationBar from './components/NavigationBar';

function App() {
    const sections = ['About', 'Resume', 'Projects', 'Contact'];

    return <NavigationBar sections={sections} />;
}

export default App;
