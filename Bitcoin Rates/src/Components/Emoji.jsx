import React from 'react';
import { useEmoji } from './EmojiContext'; // Ensure this path is correct
import Button from '@mui/material/Button';

const Emoji = () => {
    const { emoji, changeMood } = useEmoji();

    return (
        <div>
            <span style={{ fontSize: '2rem' }}>{emoji}</span>
            <br />
            <Button variant="contained" color="primary" onClick={changeMood}>
                Change Mood
            </Button>
        </div>
    );
};

export default Emoji;

