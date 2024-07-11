import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Home = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Welcome to the Home Page
            </Typography>
            <Typography variant="body1">
                This is the home page of our application.
            </Typography>
        </Container>
    );
};

export default Home;

