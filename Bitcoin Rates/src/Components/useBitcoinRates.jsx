// useBitcoinRates.js

import { useState, useEffect } from 'react';

function useBitcoinRates() {
    const [bitcoinRates, setBitcoinRates] = useState(null);

    useEffect(() => {
        const fetchBitcoinRates = async () => {
            try {
                const response = await fetch('https://api.example.com/bitcoin-rates');
                if (!response.ok) {
                    throw new Error('Failed to fetch Bitcoin rates');
                }
                const data = await response.json();
                setBitcoinRates(data);
            } catch (error) {
                console.error('Error fetching Bitcoin rates:', error);
            }
        };

        fetchBitcoinRates();
    }, []);

    return bitcoinRates;
}

export default useBitcoinRates;
