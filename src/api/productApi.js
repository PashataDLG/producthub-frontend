import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import productService from "../services/productService";

export const useFetchProducts = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: productService.getProducts
    });
};

export const useAddProductMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: productService.addProduct,
        onSuccess: (response) => {
            queryClient.invalidateQueries('products');
            return response;
        },
        onError: (error) => {
            console.error(error);
        }
    })
};

export const useDeleteProductMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: () => productService.deleteProduct,
        onSuccess: (response) => {
            queryClient.invalidateQueries('products');
            return response;
        },
        onError: (error) => {
            console.error(error);
        }
    });
};