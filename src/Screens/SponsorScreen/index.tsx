import React from 'react';
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Slider from 'react-slick';

const sponsors = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
];

const SponsorScreen = () => {

    return (
        <Box sx={{ marginTop: 16 }}>
            <Typography variant="h3" gutterBottom sx={{
                fontFamily: "monospace",
                textAlign: "center"
            }}>
                Our Sponsors
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
            {/* slider sponsors */}
            <Box sx={{ bgcolor: '#f8f8f8', py: 2, overflowX: 'auto' }}>
                <Grid container spacing={3} sx={{ flexWrap: 'nowrap', justifyContent: "center", alignSelf: "center" }}>
                    {sponsors.map((sponsor, index) => (
                    <Grid item key={index} sx={{ flex: '0 0 auto', justifyContent: "center", alignItems: "center"}}>
                        {/* <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}> */}
                            <CardMedia
                                component="img"
                                image={sponsor}
                                alt={`Sponsor ${index + 1}`}
                                sx={{
                                    // width: 200,
                                    height: 120,
                                    objectFit: "cover",
                                    backgroundColor: "red"
                                }}
                            />
                        {/* </Box> */}
                    </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default SponsorScreen;