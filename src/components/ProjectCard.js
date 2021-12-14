import * as React from 'react';
import axios from 'axios';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

export default function ProjectCard() {
    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const projects = [];
                const { data: response } = await axios.get(
                    'https://api.github.com/users/logankimbs/repos'
                );

                response.map((repo) => {
                    if (
                        repo.name === 'portfolio' ||
                        repo.name === 'twitter-bots' ||
                        repo.name === 'intex'
                    ) {
                        projects.push({
                            name: repo.name,
                            url: repo.html_url,
                            description: repo.description,
                            topics: repo.topics,
                        });
                    }
                });

                setData(projects);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

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
                href="#"
                target="_blank"
                underline="hover"
                sx={{
                    display: 'inline-flex',
                }}
            >
                <Typography variant="h3" component="h3">
                    Twitter-Bots
                </Typography>
            </Link>
            <Typography component="p" variant="body1">
                You can start your projects with Google's Material Design or
                build your own designs using the sophisticated theming features.
            </Typography>
        </Box>

        // <Grid container spacing={2} alignItems="flex-start">
        //     {data.map((repo) => (
        //         <Grid item xs={12} md={4} key={repo.name}>
        //             <Box
        //                 sx={{
        //                     bgcolor: 'background.paper',
        //                     overflow: 'hidden',
        //                     borderRadius: '4px',
        //                     boxShadow: 1,
        //                     p: 3,
        //                 }}
        //             >
        //                 <Link
        //                     href={repo.url}
        //                     target="_blank"
        //                     underline="hover"
        //                     sx={{ display: 'inline-flex' }}
        //                 >
        //                     <Typography variant="h3" component="h3">
        //                         {repo.name}
        //                     </Typography>
        //                 </Link>
        //                 <Typography component="p" variant="body2">
        //                     {repo.description}
        //                 </Typography>

        //                 <Stack direction="row" spacing={1}>
        //                     {repo.topics.map((topic) => (
        //                         <Chip label={topic} size="small" />
        //                     ))}
        //                 </Stack>
        //             </Box>
        //         </Grid>
        //     ))}
        // </Grid>
    );
}
