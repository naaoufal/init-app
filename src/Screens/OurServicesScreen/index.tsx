import React from 'react';
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';


const items = [
    {
        id: 1,
        imageSrc: 'https://via.placeholder.com/200',
        title: 'Item 1',
        description: 'This is a description of Item 1',
    },
    {
        id: 2,
        imageSrc: 'https://via.placeholder.com/200',
        title: 'Item 2',
        description: 'This is a description of Item 2',
    },
    {
        id: 3,
        imageSrc: 'https://via.placeholder.com/200',
        title: 'Item 3',
        description: 'This is a description of Item 3',
    },
    {
        id: 4,
        imageSrc: 'https://via.placeholder.com/200',
        title: 'Item 4',
        description: 'This is a description of Item 4',
    },
    {
        id: 5,
        imageSrc: 'https://via.placeholder.com/200',
        title: 'Item 5',
        description: 'This is a description of Item 5',
    },
    {
        id: 6,
        imageSrc: 'https://via.placeholder.com/200',
        title: 'Item 6',
        description: 'This is a description of Item 6',
    },
    
];


const CardItem = ({ imageSrc, title, description }: any) => (
    <Card sx={{ borderRadius: '12px', overflow: 'hidden', boxShadow: 3 }}>
        <CardMedia
            component="img"
            height="200"
            image={imageSrc}
            alt={title}
        />
        <CardContent>
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {description}
            </Typography>
        </CardContent>
    </Card>
);

const OurServicesScreen = () => {

    return (
        <Box sx={{ marginTop: 16 }}>
            <Typography variant="h3" gutterBottom sx={{
                fontFamily: "monospace",
                textAlign: "center"
            }}>
                Our Services
            </Typography>
            <Box sx={{
                marginTop: 2,
                display: "flex",
                marginBottom: 8,
                justifyContent: "center"
            }}>
                <Typography sx={{
                    textAlign: "center",
                    width: "50%"
                }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor incididunt labore dolore magna aliqua minim veniam
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                <Grid container spacing={3} justifyContent="center" sx={{
                    width: '80%', // Grid takes 80% of the parent's width
                    mx: 'auto', // Center horizontally
                }}>
                    {items.map((item) => (
                        <Grid item xs={10} sm={4}>
                            <CardItem
                                imageSrc={item.imageSrc}
                                title={item?.title}
                                description={item?.description}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default OurServicesScreen;