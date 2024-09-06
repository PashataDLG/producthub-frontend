/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { useFetchProducts } from "../api/productApi";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const { data } = useFetchProducts();

    const getProducts = () => {
        return data;
    }

    const productMethods = {
        getProducts,
    };

    return (
        <>
            <ProductContext.Provider value={productMethods}>
                {children}
            </ProductContext.Provider>
        </>
    );
}

export const useProduct = () => useContext(ProductContext);