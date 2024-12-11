import axios from "axios";

export const saveUserToServer = async (userData) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/regEvent`, userData);
        return response.data;
    } catch (error) {
        console.error('Error saving user data:', error);
        throw error;
    }
};
