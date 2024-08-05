import React from 'react';
import { Button } from '@mui/material';

const SampleButton = () => {
    const handleClick = () => {
        alert('Button clicked!');
    }

    return (
        <Button variant="contained" color="primary" onClick={handleClick}>
            Click Me
        </Button>
    )
};

export default SampleButton;