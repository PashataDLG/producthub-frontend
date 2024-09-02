import { useMutation } from '@tanstack/react-query';
import  userService from '../services/userService';

export const useLoginMutation = () => {
    return useMutation({
        mutationFn: userService.login,
        onSuccess: (data) => {
            const token = data.token;

            return token;
        },
        onError: (error) => {
            console.error('Login failed: ', error);
        }
    })
};

export const useRegisterMutation = () => {
    return useMutation({
        mutationFn: userService.register,
        onSuccess: (response) => {
            return response.message;
        },
        onError: (error) => {
            console.error(error);
        }
    })
}