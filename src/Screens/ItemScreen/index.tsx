import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const items = [
    { id: 1, title: 'Item 1', description: 'Description for Item 1', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Item 2', description: 'Description for Item 2', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Item 3', description: 'Description for Item 3', imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Item 4', description: 'Description for Item 4', imageUrl: 'https://via.placeholder.com/150' },
    { id: 5, title: 'Item 5', description: 'Description for Item 5', imageUrl: 'https://via.placeholder.com/150' },
    { id: 6, title: 'Item 6', description: 'Description for Item 6', imageUrl: 'https://via.placeholder.com/150' },
];

const ItemScreen = () => {
    return (
        <Container maxWidth="lg" sx={{ marginTop: 4 }}>
            <Typography
                variant="h3"
                align="center"  // This centers the title horizontally
                gutterBottom  // Adds spacing below the title
                sx={{ fontWeight: 'bold', marginBottom: 4 }}
            >
                My Item Collection
            </Typography>
            <Grid container spacing={4}>
                {items.map((item) => (
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
        </Container>
    );
};

export default ItemScreen;