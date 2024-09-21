import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import productService from "../services/productService";

export const useFetchProducts = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: productService.getProducts
    });
};

export const useFetchProduct = (productId) => {
    return useQuery({
        queryKey: ['product', productId],
        queryFn: () => productService.getProduct(productId),
        enabled: !!productId,
        staleTime: 60000,
        cacheTime: 300000
    });
}

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

export const useEditProductMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: productService.editProduct,
        onSuccess: (response) => {
            queryClient.invalidateQueries('products');
            return response;
        },
        onError: (error) => {
            console.error(error);
        }
    });
};

export const useDeleteProductMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: productService.deleteProduct,
        onSuccess: (response) => {
            queryClient.invalidateQueries('products');
            return response;
        },
        onError: (error) => {
            console.error(error);
        }
    });
};