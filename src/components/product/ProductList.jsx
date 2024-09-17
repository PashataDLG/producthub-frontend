import { useProduct } from '../../context/product-context';
import { Grid, Snackbar, Alert } from '@mui/material';
import ProductCard from './ProductCard';
import { useAlert } from '../../context/alert-context';

const ProductList = () => {
    const { getProducts } = useProduct();
    const { alert, setAlert } = useAlert();

    const products = getProducts();
    return (
        <>
            <Grid container spacing={2} justifyContent="center">
                {products.map(product => (
                    <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
            <Snackbar
                open={alert.open}  // taking the open property to check if the alert should be opened
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert
                    onClose={() => setAlert(prev => ({ ...prev, open: false }))} // Handle closing
                    severity={alert.severity}
                    sx={{ width: '100%' }}
                >
                    {alert.message}
                </Alert>
            </Snackbar>
        </>
    );
};

export default ProductList