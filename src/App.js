import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DrawerAppBar from './components/Navigation';
import SampleButton from './components/SampleButton';

function App() {
  return (
    <div>
      <Router>
        <DrawerAppBar />
        <Routes>
        <Route path="/" />
        <Route path="/about" />
        <Route path="/contact"  />
        </Routes>
      </Router>
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to ProductHub
        </Typography>
        <SampleButton />
      </Container>
    </div>
  );
}

export default App;