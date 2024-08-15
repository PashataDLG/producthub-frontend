import { useState } from "react";

export const useAlert = () => {
    const [open, setOpen] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState('success');
    const [message, setMessage] = useState('');

    const resetAlert = () => {
        setOpen(false);
        setAlertSeverity('success');
        setMessage('');
    };

    return {
        open,
        alertSeverity,
        message,
        setOpen,
        setAlertSeverity,
        setMessage,
        resetAlert
    };
};