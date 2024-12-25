import { Box, Typography } from '@mui/material';
import React from 'react';
import Slider from "react-slick";
import CarouselComponent from '../../Components/CarouselComponent';
import OurServicesScreen from '../OurServicesScreen';
import SponsorScreen from '../SponsorScreen';
import FooterComponent from '../../Components/FooterComponent';

const HomeScreen = () => {

    return (
        <Box>
            <CarouselComponent />
            <OurServicesScreen />
            <SponsorScreen />
            <FooterComponent />
        </Box>
    );
};

export default HomeScreen;