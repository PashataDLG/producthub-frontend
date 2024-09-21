import { useParams } from 'react-router-dom';
import { useAlert } from '../../context/alert-context';
import { useProduct } from '../../context/product-context';
import { useFetchProduct } from '../../api/productApi'; // добави import
import { useForm } from '../../hooks/useForm';
import {
    Container,
    Box,
    Typography,
    TextField,
    Button,
    Grid,
    Snackbar,
    Alert
} from '@mui/material';

const EditProduct = () => {
    const { onEditProduct } = useProduct();
    const { alert, setAlert } = useAlert();
    const { id } = useParams();
    const { data: product } = useFetchProduct(id);

    const { changeHandler, onSubmit, values } = useForm(
        product ? 
        { name: product.name, price: product.price, quantity: product.quantity, _id: product._id } 
        : 
        { name: '', price: '', quantity: '', _id: '' },
        onEditProduct,
    );

    return (
        <>
            <Container maxWidth="sm" sx={{ paddingTop: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Edit Product
                </Typography>
                <Box
                    sx={{
                        padding: 4,
                        border: '1px solid #ddd',
                        borderRadius: 2,
                        boxShadow: 3,
                        backgroundColor: '#fff',
                    }}
                >
                    <form onSubmit={onSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Product Name"
                                    name="name"
                                    variant="outlined"
                                    sx={{ marginBottom: 2 }}
                                    value={values['name']}
                                    onChange={changeHandler}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Product Price"
                                    name="price"
                                    type="number"
                                    sx={{ marginBottom: 2 }}
                                    variant="outlined"
                                    value={values['price']}
                                    onChange={changeHandler}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Product Quantity"
                                    name="quantity"
                                    variant="outlined"
                                    type="number"
                                    sx={{ marginBottom: 2 }}
                                    value={values['quantity']}
                                    onChange={changeHandler}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    sx={{
                                        display: 'block',
                                        margin: 'auto',
                                        padding: '10px 20px',
                                    }}
                                >
                                    Edit Product
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Container>
            <Snackbar
                open={alert.open}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert
                    onClose={() => setAlert(prev => ({ ...prev, open: false }))}
                    severity={alert.severity}
                    sx={{ width: '100%' }}
                >
                    {alert.message}
                </Alert>
            </Snackbar>
        </>
    );
};

export default EditProduct;
