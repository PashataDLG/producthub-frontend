import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Snackbar, Alert } from '@mui/material';

const defaultTheme = createTheme();

export const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [open, setOpen] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState('sucess');
    const [alertMessage, setAlertMessage] = useState('');


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    };

    const handleClose = () => {
        setOpen(false);
        setAlertSeverity('success');
        setAlertMessage('');
    };

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://serene-ocean-15581-68c8bef9ec28.herokuapp.com/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message);
            };

            setFormData({
                username: '',
                password: ''
            });

            const data = await response.json();
            console.log('Success: ', data);

            setAlertSeverity('success');
            setAlertMessage(`Your have singed up successfully. You are welcome to log into your account!`);
            setOpen(true);

            setTimeout(() => {
                navigate('/login');
            }, 3000);

        } catch (error) {
            setAlertSeverity('error');
            setAlertMessage(`${error}`);
            setOpen(true);
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Register Here
                    </Typography>
                    <Box component="form" noValidate onSubmit={submitHandler} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="username"
                                    name="username"
                                    autoComplete="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="password"
                                    type="password"
                                    id="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
            <Snackbar
                onClose={handleClose}
                open={open}
                autoHideDuration={10000}
                anchorOrigin={{ vertical: 'top', horizontal: 'center'}}
            >
                <Alert onClose={handleClose} severity={alertSeverity} sx={{ width: '100%' }}>
                    {alertMessage}
                </Alert>
            </Snackbar>
        </ThemeProvider>
    );
}