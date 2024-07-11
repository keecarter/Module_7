import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Login = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Login Page
            </Typography>
            <Box component="form" noValidate autoComplete="off">
                <TextField
                    fullWidth
                    margin="normal"
                    label="Email Address"
                    type="email"
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Password"
                    type="password"
                    variant="outlined"
                />
                <Button variant="contained" color="primary" type="submit">
                    Login
                </Button>
            </Box>
        </Container>
    );
};

export default Login;

