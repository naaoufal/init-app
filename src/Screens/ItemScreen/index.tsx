import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, Container, Button, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';

const items = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    title: `Item ${index + 1}`,
    description: `Description for item ${index + 1}`,
    imageUrl: 'https://via.placeholder.com/150'
}));

const ItemScreen = () => {

    const [visibleCount, setVisibleCount] = useState(6);
    const [loading, setLoading] = useState(false);

    const loadMoreItems = () => {
        setLoading(true);
        setTimeout(() => {
            setVisibleCount((prev) => prev + 6);
            setLoading(false);
        }, 4000);
    };

    return (
        <Container maxWidth="lg" sx={{ marginTop: 10}}>
            <Typography
                variant="h3"
                align="center"  // This centers the title horizontally
                gutterBottom  // Adds spacing below the title
                sx={{ fontWeight: 'bold', marginBottom: 10 }}
            >
                My Item Collection
            </Typography>
            <Grid container spacing={4}>
                {items.slice(0, visibleCount).map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                    {/* <Link to={"/"}> */}
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={item.imageUrl}
                                alt={item.title}
                            />
                            <CardContent>
                                <Typography variant="h6" component="div">
                                {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                {item.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    {/* </Link> */}
                </Grid>
                ))}
            </Grid>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: 4, // Space between grid and button
            }}>
                {loading ?
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                    :
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={loadMoreItems}
                        sx={{ marginBottom: 2 }}
                    >
                        Load More
                    </Button>
                }
            </Box>
        </Container>
    );
};

export default ItemScreen;