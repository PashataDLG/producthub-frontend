import * as request from "../services/requester";

const baseUrl = 'https://serene-ocean-15581-68c8bef9ec28.herokuapp.com/auth';

export const login = async (data) => {
    const result = await request.post(`${baseUrl}/login`, data);
    
    return result;
};

export const register = async (data) => {
    const result = await request.post(`${baseUrl}/register`, data);

    return result;
}

export const logout = async () => {
     const result = await request.post(`${baseUrl}/logout`, null);

     return result;
};