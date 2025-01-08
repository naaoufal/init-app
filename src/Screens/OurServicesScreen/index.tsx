import React, { useEffect, useState } from 'react';
import { Box, Button, ButtonBase, Card, CardContent, CardMedia, Grid, Skeleton, Snackbar, Typography } from '@mui/material';
import { SnackbarOrigin } from '@mui/material/Snackbar';

interface State extends SnackbarOrigin {
    open: boolean;
}  

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


const CardItem = ({ imageSrc, title, description, onclick }: any) => (
    <Card sx={{ borderRadius: '12px', overflow: 'hidden', boxShadow: 3 }}>
        <ButtonBase onClick={onclick}>
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
        </ButtonBase>
    </Card>
);

const OurServicesScreen = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 3000);
    }, []);

    const [st, setSt] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    const { vertical, horizontal, open } = st;

    const handleClick = (newState: any) => () => {
        setSt({ ...newState, open: true });
    };

    const handleClose = () => {
        setSt({ ...st, open: false });
    };

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
                            {loading ? 
                                <Skeleton variant="rectangular" width="100%">
                                    <div style={{ paddingTop: '57%' }} />
                                </Skeleton>
                                :
                                <CardItem
                                    imageSrc={item.imageSrc}
                                    title={item?.title}
                                    description={item?.description}
                                    onclick={handleClick({ vertical: 'top', horizontal: 'center' })}
                                />
                            }
                        </Grid>
                    ))}
                    <Snackbar
                        anchorOrigin={{ vertical: "top", horizontal: "center" }}
                        open={open}
                        onClose={handleClose}
                        message="I love snacks"
                        autoHideDuration={5000}
                        key={vertical + horizontal}
                    />
                </Grid>
            </Box>
        </Box>
    );
};

export default OurServicesScreen;
