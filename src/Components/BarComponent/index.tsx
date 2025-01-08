import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Avatar, Modal } from '@mui/material';
import SignInModalComponent from '../SignInModalComponent';
import { deepOrange, deepPurple } from '@mui/material/colors';

const BarComponent = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="sticky">
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        {/* Logo on the left */}
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            LOGO
                        </Typography>

                        {/* Buttons on the right */}
                        <Box>
                            {/* <Button onClick={handleOpen} color="inherit" sx={{ marginRight: 2 }}>
                                Login
                            </Button>
                            <Button color="inherit">Register</Button> */}
                            <Avatar sx={{ bgcolor: deepOrange[500] }}>NB</Avatar>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            {/* modal for signin and signup */}
            <SignInModalComponent open={open} handleOpen={handleOpen} handleClose={handleClose} />
        </>
    );
};

export default BarComponent;