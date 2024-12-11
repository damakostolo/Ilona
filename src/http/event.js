import axios from "axios";


export const eventGet = async () => {
    try {
        const response = await axios.get(`http://localhost:5000/api/event`);
        return response.data;
    } catch (error) {
        console.error('Error fetching event:', error);
        throw error; // Ви також можете прокинути помилку далі
    }
}


