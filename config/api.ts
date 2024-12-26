import axios, { AxiosInstance } from 'axios';

// Buat instance Axios
const api: AxiosInstance = axios.create({
    baseURL: process.env.EXPO_PUBLIC_URL_BASE, // Ganti dengan URL API Anda
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    timeout: 10000, // Timeout dalam milidetik
});

// Tambahkan interceptor untuk menyisipkan token
api.interceptors.request.use(
    async (config) => {
        const token = 'e9e63d1e5429a3448a1a8f8fe305ae7a666fb375d700e38eeb97f8275fbd434d'; // Ganti dengan cara Anda mendapatkan token (misalnya dari state atau storage)
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
