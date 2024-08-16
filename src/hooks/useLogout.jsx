import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";

export const useLogout = () => {
    const navigate = useNavigate();
    const { setIsToken, getToken, removeToken } = useAuth();

    const logout = async () => {
        const token = getToken();

        if (!token) {
            throw new Error('There is no token!');
        }

        try {
            await fetch('https://serene-ocean-15581-68c8bef9ec28.herokuapp.com/auth/logout', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })

            removeToken();
            setIsToken(false);
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    return logout;
};