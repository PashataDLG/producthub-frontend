import { createContext, useContext, useState, } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from '../services/userService'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
        
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
       const result = await authService.login(data);

       addToken(result);

       navigate('/');
    };

    const onRegister = async (data) => {
        await authService.register(data);

        navigate('/login');
    }
    
    const [isToken, setIsToken] = useState(getToken() !== null);

    const authMethods = {
        isToken,
        getToken,
        removeToken,
        addToken,
        onLoginSubmit
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