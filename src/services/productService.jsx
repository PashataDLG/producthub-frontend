import axios from "axios";

const baseUrl = 'https://serene-ocean-15581-68c8bef9ec28.herokuapp.com/api/products';

const productService = {
    async getProducts() {
        try {
            const response = await axios.get(baseUrl);

            return response.data;
        } catch (error) {
            console.error('There was an error: ', error);
        }
    },
}

export default productService;