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
}