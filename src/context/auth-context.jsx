import { createContext, useContext, useState, } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    
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
    
    const [isToken, setIsToken] = useState(getToken() !== null);

    const authMethods = {
        isToken,
        getToken,
        removeToken,
        addToken,
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