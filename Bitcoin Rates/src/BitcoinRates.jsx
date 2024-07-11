import React from 'react';
import Emoji from './Components/Emoji'; // Ensure this path is correct
import { EmojiProvider } from './Components/EmojiContext'; // Ensure this path is correct
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const BitcoinRates = () => {
    return (
        <EmojiProvider>
            <Container>
                <Typography variant="h4" gutterBottom>
                    Bitcoin Rates Page
                </Typography>
                {/* Add content specific to the Bitcoin Rates page */}
                <Emoji /> {/* Example usage of Emoji component */}
            </Container>
        </EmojiProvider>
    );
};

export default BitcoinRates;

