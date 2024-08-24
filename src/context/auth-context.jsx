import { createContext, useContext, useState, } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../api/authApi";

// import * as authService from '../services/userService'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const { mutate: loginUser } = useLoginMutation();
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
        try {
            const result = await loginUser(data);

            addToken(result);

            navigate('/');
        } catch (error) {
            console.error('There was an errror: ', error);
        }

    };

    const onRegister = async () => {
        console.log('da');
        // await authService.register(data);

        // navigate('/login');
    }

    const [isToken, setIsToken] = useState(getToken() !== null);

    const authMethods = {
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