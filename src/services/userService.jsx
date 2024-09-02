import axios from "axios";

const baseUrl = 'https://serene-ocean-15581-68c8bef9ec28.herokuapp.com/auth';

const userService = {
    async login(data) {
        try {
            const result = await axios.post(`${baseUrl}/login`, data); // axios manually strigifies the data, and adds the content type

            return result.data; // axios return object, in which the property data holds the data returned from the server
        } catch (error) {
            console.error('Login failed: ', error);
            throw error; // rethrow so it can be handled elsewhere
        }

    },

    async register(data) {
        try {
            const result = await axios.post(`${baseUrl}/register`, data); // same as above

            return result.data; // same as above
        } catch (error) {
            if (error.response && error.response.data) {
                // Throw the error with the servers error message
                throw new Error(error.response.data.message || 'Registration failed');
            } else {
                // Handle the case where no response was received
                throw new Error(error.message || 'Registration failed');
            }
        }
    },

    async logout(token) {
        const result = await axios.post(`${baseUrl}/logout`, null, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
              }
        });

        return result.data;
    }
}

export default userService;