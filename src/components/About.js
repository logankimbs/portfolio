import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function Page() {
    return (
        <Box>
            <Card
                sx={{
                    maxWidth: 345
                }}
            >
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                    >
                        About
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                    >
                        This is just a little introduction. Please keep it short as to
                        not overwhelm visitors. I’m talking only two or three sentences.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}


export default Page;
