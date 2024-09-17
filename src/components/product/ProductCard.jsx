/* eslint-disable react/prop-types */
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useProduct } from '../../context/product-context';
import { useAuth } from '../../context/auth-context';


const ProductCard = ({ product }) => {
    const { isToken } = useAuth();
    const { onDeleteProduct } = useProduct();


    return (
        <Card sx={{ maxWidth: 345, margin: '16px' }}>
            <CardMedia
                component="img"
                height="140"
                image='https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg'
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Product name: {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ${product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Quantity: {product.quantity}
                </Typography>
                {isToken ? <Button
                    variant="outlined"
                    color="error"
                    sx={{ marginTop: '8px' }}
                    onClick={() => onDeleteProduct(product._id)}
                >
                    Delete
                </Button>
                    :
                    ''}
            </CardContent>
        </Card>
    );
};

export default ProductCard;