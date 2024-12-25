import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Divider, Modal, TextField } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';

const SignInModalComponent = (
    { handleClose, handleOpen, open }: any) => {

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: 2,
        p: 4,
    };

    const buttonStyle = {
        height: '38px', // Adjust button height
        borderRadius: '50px', // Rounded corners
        textTransform: 'none', // Prevent uppercase text
    };

    const inputStyle = {
        // height: '50px', // Match button height
        borderRadius: '12px', // Match button rounded corners
    };

    return (
        <Modal open={open} onClose={handleClose} aria-labelledby="signin-signup-modal">
            <Box sx={modalStyle}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography id="signin-signup-modal" variant="h6">
                        Sign In
                    </Typography>
                    <IconButton onClick={handleClose}>
                    <CloseIcon />
                    </IconButton>
                </Box>
                {/* form field */}
                <Box sx={{  mt: 3 }}>
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        sx={{
                            mb: 2,
                            '& .MuiOutlinedInput-root': { ...inputStyle },
                        }}
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        variant="outlined"
                        sx={{
                            mb: 3,
                            '& .MuiOutlinedInput-root': { ...inputStyle },
                        }}
                    />
                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                        ...buttonStyle,
                        bgcolor: '#1976D2', // Primary color
                        color: '#fff',
                        '&:hover': { bgcolor: '#115293' }, // Darker primary on hover
                        }}
                    >
                        Connexion
                    </Button>
                    {/* Divider */}
                    <Divider sx={{ my: 3 }}>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            OR
                        </Typography>
                    </Divider>
                    {/* Sign-in options */}
                    <Button
                        variant="contained"
                        fullWidth
                        startIcon={<GoogleIcon />}
                        sx={{ ...buttonStyle, mb: 2, bgcolor: '#DB4437', color: '#fff', '&:hover': { bgcolor: '#C53627' } }}
                    >
                        Sign in with Google
                    </Button>
                    <Button
                        variant="contained"
                        fullWidth
                        startIcon={<AppleIcon />}
                        sx={{ ...buttonStyle, mb: 2, bgcolor: '#000', color: '#fff', '&:hover': { bgcolor: '#333' } }}
                    >
                        Sign in with Apple
                    </Button>
                    <Button
                        variant="contained"
                        fullWidth
                        startIcon={<FacebookIcon />}
                        sx={{ ...buttonStyle, mb: 2, bgcolor: '#1877F2', color: '#fff', '&:hover': { bgcolor: '#145DBE' } }}
                    >
                        Sign in with Facebook
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default SignInModalComponent;