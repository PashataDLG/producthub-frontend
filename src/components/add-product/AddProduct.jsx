import { useAlert } from '../../context/alert-context';
import { useProduct } from '../../context/product-context';
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

const AddProduct = () => {
    const { onAddProduct } = useProduct();
    const { alert, setAlert } = useAlert();

    const { changeHandler, onSubmit, values } = useForm({
        name: '',
        price: 0,
        quantity: 0
    }, onAddProduct);

    return (
        <>
            <Container maxWidth="sm" sx={{ paddingTop: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Add Product
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
                                    Add Product
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Container>
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

export default AddProduct;
