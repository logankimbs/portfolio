import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== value}
            aria-labelledby={`resume-tab-${index}`}
            id={`resume-tabpanel-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function allyProps(index) {
    return {
        id: `resume-tab-${index}`,
        'aria-controls': `resume-tabpanel-${index}`,
    };
}

export default function ResumeTabs() {
    const tabs = ['Education', 'Experience', 'Skills'];

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ py: 3, px: 4 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    aria-label="tabs for my resume section"
                    value={value}
                    onChange={handleChange}
                >
                    {tabs.map((tab, i) => (
                        <Tab key={tab} label={tab} {...allyProps(i)}></Tab>
                    ))}
                </Tabs>
            </Box>
            {tabs.map((tab, i) => (
                <TabPanel key={tab} value={value} index={i}>
                    {tab}
                </TabPanel>
            ))}
        </Box>
    );
}
