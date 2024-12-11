
import axios from "axios";

export const userGet = async (id) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/userEvent/${id}`);
        return response.data.user;
    } catch (error) {
        console.error('Error fetching event:', error);
        throw error; // Ви також можете прокинути помилку далі
    }
}
