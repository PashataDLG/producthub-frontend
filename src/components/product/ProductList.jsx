import { useProduct } from '../../context/product-context';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';

const ProductList = () => {
    const { getProducts } = useProduct();

    const products = getProducts();
    return (
        <Grid container spacing={2} justifyContent="center">
            {products.map(product => (
                <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
                    <ProductCard product={product} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductList