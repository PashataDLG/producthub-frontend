import { Container, Box, Typography, TextField, Button, Grid } from '@mui/material';

const AddProduct = () => {
    

    return (
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
                <form>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Product Name"
                                name="productName"
                                value=""
                                variant="outlined"
                                sx={{ marginBottom: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Product Price"
                                name="productPrice"
                                value=""
                                variant="outlined"
                                type="number"
                                sx={{ marginBottom: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Product Quantity"
                                name="productQuantity"
                                value=""
                                variant="outlined"
                                type="number"
                                sx={{ marginBottom: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Product Image"
                                name="productImg"
                                value=""
                                variant="outlined"
                                sx={{ marginBottom: 2 }}
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
    );
};

export default AddProduct;
