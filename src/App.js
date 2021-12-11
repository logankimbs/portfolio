import * as React from 'react';

import './utilities/styles/styles.css';

import NavigationBar from './components/NavigationBar';
import ResumeTabs from './components/ResumeTabs';

function App() {
    const sections = ['About', 'Resume', 'Projects', 'Contact'];

    return (
        <>
            <NavigationBar sections={sections} />
            <ResumeTabs />
        </>
    );
}

export default App;
