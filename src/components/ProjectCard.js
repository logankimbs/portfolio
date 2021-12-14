import * as React from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function ProjectCard(props) {
    const { project } = props;

    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                overflow: 'hidden',
                borderRadius: '4px',
                boxShadow: 1,
                p: 2.5,
            }}
        >
            <Link
                href={project.html_url}
                target="_blank"
                underline="hover"
                sx={{
                    display: 'inline-flex',
                }}
            >
                <Typography variant="h3" component="h3">
                    {project.name}
                </Typography>
            </Link>
            <Typography component="p" variant="body1">
                {project.description}
            </Typography>
        </Box>
    );
}
