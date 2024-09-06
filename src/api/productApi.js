import { useQuery } from "@tanstack/react-query";
import productService from "../services/productService";

export const useFetchProducts = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: productService.getProducts
    });
};