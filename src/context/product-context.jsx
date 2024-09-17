/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { useFetchProducts, useAddProductMutation, useDeleteProductMutation } from "../api/productApi";
import { useNavigate } from "react-router-dom";
import { useAlert } from "./alert-context";


const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const { data } = useFetchProducts();
    const { mutateAsync: addProduct } = useAddProductMutation();
    const { mutateAsync: deleteProduct } = useDeleteProductMutation();

    const { setAlert } = useAlert();
    const navigate = useNavigate();

    const getProducts = () => {
        return data;
    }

    const onAddProduct = async (productData) => {
        try {
            await addProduct(productData);

            setAlert({ message: 'Product successfully created', severity: 'success', open: true })

            setTimeout(() => {
                setAlert({ message: '', severity: '', open: false })
                navigate('/products');
            }, 1500);
        } catch (error) {
            console.error(error);
        }
    }

    const onDeleteProduct = async (productId) => {
        try {
            await deleteProduct(productId);

            navigate('/products');
        } catch (error) {
            console.error(error);

        }
    }

    const productMethods = {
        getProducts,
        onAddProduct,
        onDeleteProduct
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