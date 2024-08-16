import { useNavigate } from "react-router-dom";

export const useLogout = (setIsToken) => {
    const navigate = useNavigate();

    const logout = async () => {
        const token = localStorage.getItem('token');

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

            localStorage.removeItem('token');
            setIsToken(false);
            navigate('/');
        } catch (error) {
            console.error(error);

        }
    };

    return logout;
};