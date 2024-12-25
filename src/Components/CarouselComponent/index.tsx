import { Box, Typography } from '@mui/material';
import React from 'react';
import Slider from "react-slick";

const slides = [
    { id: 1, image: 'https://via.placeholder.com/1900x600', title: 'Title 1' },
    { id: 2, image: 'https://via.placeholder.com/1900x600', title: 'Title 2' },
    { id: 3, image: 'https://via.placeholder.com/1900x600', title: 'Title 3' },
];

const CarouselComponent = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Box>
            <Slider {...settings}>
                {slides.map((slide) => (
                    <Box key={slide.id} sx={{ position: 'relative', textAlign: 'center' }}>
                        <img
                        src={slide.image}
                        alt={slide.title}
                        style={{ width: '100%', borderRadius: '8px' }}
                        />
                        <Typography
                        variant="h5"
                        sx={{
                            position: 'absolute',
                            bottom: 16,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: '#fff',
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            padding: '4px 12px',
                            borderRadius: '4px',
                        }}
                        >
                        {slide.title}
                        </Typography>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default CarouselComponent;