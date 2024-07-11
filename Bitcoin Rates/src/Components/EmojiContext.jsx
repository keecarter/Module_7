import React, { createContext, useState, useContext } from 'react';

const EmojiContext = createContext();

export const EmojiProvider = ({ children }) => {
    const [emoji, setEmoji] = useState('😊'); // Initial emoji state

    const changeMood = () => {
        const newEmoji = emoji === '😊' ? '😢' : '😊';
        setEmoji(newEmoji);
    };

    return (
        <EmojiContext.Provider value={{ emoji, changeMood }}>
            {children}
        </EmojiContext.Provider>
    );
};

export const useEmoji = () => {
    const context = useContext(EmojiContext);
    if (!context) {
        throw new Error('useEmoji must be used within an EmojiProvider');
    }
    return context;
};

