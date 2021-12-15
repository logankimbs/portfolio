import * as React from 'react';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

export default function ProjectCard(props) {
    const { project } = props;

    return (
        <Paper
            variant="outlined"
            sx={{
                p: '20px',
                borderColor: 'rgba(144, 202, 249, 0.5)',
                backgroundColor: 'transparent.primary.main',
                height: '100%',
                borderRadius: 2,
            }}
        >
            <Typography
                component="h3"
                variant="h3"
                sx={{ textTransform: 'capitalize' }}
            >
                <Link underline="hover" target="_blank" href={project.html_url}>
                    {project.name}
                </Link>
            </Typography>
            <Typography component="p" variant="body2" color="primary.light">
                {project.description}
            </Typography>
            <Stack direction="row" spacing={1}>
                {project.topics.map((topic) => (
                    <Chip
                        size="small"
                        color="primary"
                        variant="outlined"
                        key={topic}
                        label={topic}
                        sx={{ textTransform: 'capitalize' }}
                    />
                ))}
            </Stack>
        </Paper>
    );
}
