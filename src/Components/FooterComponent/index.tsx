import { Box, Grid, Link, Typography } from "@mui/material";


const FooterComponent = () => {
    return(
        <Box sx={{ bgcolor: '#333', color: '#fff', py: 4 }}>
            <Grid container spacing={4} justifyContent="space-between">
            {/* Logo and Description */}
                <Grid item xs={12} sm={4}>
                    <Box sx={{ justifyContent: "center" }}>
                        <Typography variant="h4" sx={{ mb: 2 }}>
                            LOGO
                        </Typography>
                        <Typography variant="body2">
                        Welcome to our website! We aim to provide the best services and information to our users.
                        </Typography>
                    </Box>
                </Grid>
                {/* Site Navigation */}
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                        Navigation
                    </Typography>
                    <Box>
                        <Link href="/" underline="hover" color="inherit" sx={{ display: 'block', mb: 1 }}>
                        Home
                        </Link>
                        <Link href="/about" underline="hover" color="inherit" sx={{ display: 'block', mb: 1 }}>
                        About Us
                        </Link>
                        <Link href="/services" underline="hover" color="inherit" sx={{ display: 'block', mb: 1 }}>
                        Services
                        </Link>
                        <Link href="/contact" underline="hover" color="inherit" sx={{ display: 'block' }}>
                        Contact
                        </Link>
                    </Box>
                </Grid>
                {/* Contact Information */}
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                        Contact Us
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                        Email: <Link href="mailto:info@example.com" underline="hover" color="inherit">info@example.com</Link>
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                        Phone: +1 234 567 890
                    </Typography>
                    <Typography variant="body2">
                        Address: 123 Main Street, City, Country
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FooterComponent;