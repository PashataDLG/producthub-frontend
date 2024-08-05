import React from 'react';
import SampleButton from './components/SampleButton';
import { Container } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { NavBar } from './components/Navigation';


function App() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <NavBar />
                <h1>Hello, Material-UI</h1>
                <SampleButton />
            </ThemeProvider>
        </div>
    );
}

export default App;