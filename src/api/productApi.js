import { useQuery, useMutation } from "@tanstack/react-query";
import productService from "../services/productService";

export const useFetchProducts = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: productService.getProducts
    });
};

export const useAddProductMutation = () => {
    return useMutation({
        mutationFn: productService.addProduct,
        onSuccess: (response) => {
            return response;
        },
        onError: (error) => {
            console.error(error);
            
        }
    })
} ;