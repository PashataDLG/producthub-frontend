/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { jwtDecode } from "jwt-decode";

import { createContext, useContext, useState, } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation, useLougoutMutation, useRegisterMutation } from "../api/authApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const { mutateAsync: loginUser } = useLoginMutation();
    const { mutateAsync: registerUser } = useRegisterMutation();
    const { mutateAsync: logoutUser, isLoading: isLogoutLoading } = useLougoutMutation();

    const navigate = useNavigate();
    const [alert, setAlert] = useState({ message: '', severity: '', open: false });

    const getToken = () => {
        return localStorage.getItem('token');
    };

    const removeToken = () => {
        localStorage.removeItem('token');
        setIsToken(false);
    };

    const addToken = (token) => {
        localStorage.setItem('token', token);
        setIsToken(true);
    }

    const isTokenExpired = () => {
        const token = getToken();

        if (!token) {
            return false;
        }
        const decodedToken = jwtDecode(token);

        const timeNow = Math.floor(Date.now() / 1000);

        return timeNow > decodedToken.exp ? true : false;
    }

    const onLoginSubmit = async (data) => {
        try {
            const token = await loginUser(data);

            setAlert({ message: 'You have successfully logged in!', severity: 'success', open: true })

            setTimeout(() => {
                addToken(token);
                setAlert({ message: '', severity: '', open: false });
                navigate('/');
            }, 1500);
        } catch (error) {
            console.error('There was an errror:', error);
            setAlert({ message: error.message, severity: 'error', open: true })
        }

    };

    const onRegister = async (data) => {
        try {
            const result = await registerUser(data);

            setAlert({ message: result.message, severity: 'success', open: true });

            setTimeout(() => {
                setAlert({ message: '', severity: '', open: false });
                navigate('/login');
            }, 1500);
        }
        catch (error) {
            console.error(error);
            setAlert({ message: error.message, severity: 'error', open: true });
        }

    }

    const onLogout = async () => {
        try {
            const token = getToken();
            await logoutUser(token);

            removeToken();
            navigate('/');
        } catch (error) {
            console.error(error);

        }
    }

    const [isToken, setIsToken] = useState(getToken() !== null);

    const authMethods = {
        alert,
        setAlert,
        isToken,
        getToken,
        removeToken,
        addToken,
        onLoginSubmit,
        onRegister,
        onLogout,
        isLogoutLoading,
        isTokenExpired
    }

    return (
        <>
            <AuthContext.Provider value={authMethods}>
                {children}
            </AuthContext.Provider>
        </>
    );
}

export const useAuth = () => useContext(AuthContext);