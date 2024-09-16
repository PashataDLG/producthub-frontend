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

    async addProduct(productData) {
        try {
            const authToken = localStorage.getItem('token');
            
            const response = await axios.post(baseUrl, productData, {
                headers: {
                    'Authorization': `Bearer ${authToken}`
                  }
            });

            return response.data;
        } catch (error) {
            console.error(error);
            
        }
    },

    async deleteProduct(productId) {
        try {
            const authToken = localStorage.getItem('token');

            const response = await axios.delete(`${baseUrl}/${productId}}`, null, {
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }
            })

            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}

export default productService;