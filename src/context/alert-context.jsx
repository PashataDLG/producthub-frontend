/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState({ message: '', severity: '', open: false });

    return (
        <AlertContext.Provider value={{ alert, setAlert }}>
            {children}
        </AlertContext.Provider>
    );
}

export const useAlert = () => {
    return useContext(AlertContext)
}