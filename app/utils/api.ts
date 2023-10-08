import axios from 'axios';

const API_BASE_URL = process.env.API_BASE_URL;
export const fetchData = async <T>(endpoint: string): Promise<T> => {
    console.log(process.env)
    try {
        const response = await axios.get(`${API_BASE_URL}/api${endpoint}`);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error fetching data');
    }
};
