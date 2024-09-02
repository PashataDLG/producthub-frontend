import { createContext, useContext, useState, } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation, useRegisterMutation } from "../api/authApi";

// import * as authService from '../services/userService'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const { mutate: loginUser } = useLoginMutation();
    const { mutateAsync: registerUser } = useRegisterMutation();

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

    const onLoginSubmit = async (data) => {
        try {
            const result = await loginUser(data);

            addToken(result);

            navigate('/');
        } catch (error) {
            console.error('There was an errror: ', error);
        }

    };

    const onRegister = async (data) => {
        try {
            const result = await registerUser(data);

            setAlert({ message: result.message, severity: 'success', open: true });

            setTimeout(() => {
                navigate('/login');
            }, 5000);
        }
        catch (error) {
            console.error(error);
            setAlert({ message: error.message, severity: 'error', open: true });
            // console.log(alert);
            // console.error('There is an error: ', error)
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
        onRegister
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