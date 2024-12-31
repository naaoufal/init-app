import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Alert, Divider, Modal, Snackbar, TextField } from '@mui/material';
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

    const errorStyle = {
        marginTop: 2,
    };

    const buttonStyle = {
        height: '40px', // Adjust button height
        borderRadius: '50px', // Rounded corners
        textTransform: 'none', // Prevent uppercase text
    };

    const inputStyle = {
        // height: '50px', // Match button height
        borderRadius: '12px', // Match button rounded corners
    };

    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        if(email == "nf@gmail.com" && password == "123456") {
            // redirect page here or validate data to be stored on localStorage
            setError(false);
        } else {
            setError(true);
        }
    };

    return (
        <Modal open={open} onClose={() => {
            handleClose();
            setError(false);
        }} aria-labelledby="signin-signup-modal">
            <Box sx={modalStyle}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography id="signin-signup-modal" variant="h6">
                        Sign In
                    </Typography>
                    <IconButton onClick={() => {
                        handleClose();
                        setError(false);
                    }}>
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
                        onChange={(event) => setEmail(event.target.value)}
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
                        onChange={(event) => setPassword(event.target.value)}
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
                        onClick={handleSubmit}
                    >
                        Connexion
                    </Button>
                    {error && (
                        <Box sx={{...errorStyle}}>
                            <Alert severity="error">Email or Password are Incorrect !!! </Alert>
                        </Box>
                    )}
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