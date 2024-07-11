import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import BitcoinRates from './BitcoinRates';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/bitcoin-rates" element={<BitcoinRates />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
