import * as React from 'react';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

export default function ProjectCard(props) {
    const { project } = props;

    return (
        <Paper
            variant="outlined"
            sx={{
                p: '20px',
                borderColor: 'primary.main',
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
                {project.name}
            </Typography>
            <Typography component="p" variant="body2" color="text.secondary">
                {project.description}
            </Typography>
            <Stack direction="row" spacing={1}>
                {project.topics.map((topic) => (
                    <Chip
                        size="small"
                        color="secondary"
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
