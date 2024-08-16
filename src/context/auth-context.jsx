import { createContext, useContext, useState, } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    
    const getToken = () => {
        return localStorage.getItem('token');
    };
    
    const removeToken = () => {
        return localStorage.removeItem('token');
    };
    
    const [isToken, setIsToken] = useState(getToken() !== null);

    const authMethods = {
        setIsToken,
        isToken,
        getToken,
        removeToken,
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