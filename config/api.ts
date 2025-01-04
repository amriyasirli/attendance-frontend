import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import * as SecureStore from 'expo-secure-store';
import { useDispatch } from 'react-redux';
import { deleteUserState } from 'redux/slices/userSlice';
// Buat instance Axios
const api: AxiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_URL_BASE, // Ganti dengan URL API Anda
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Tambahkan interceptor untuk menyisipkan token
api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig<any>) => {
    const token = SecureStore.getItem('token') || null; // example 123
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError<any>) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse<any>) => response,
  async (error: AxiosError<any>) => {
    const originalRequest = error.config as InternalAxiosRequestConfig;
    if (error.response?.status === 403) {
      try {
        SecureStore.deleteItemAsync('user');
        SecureStore.deleteItemAsync('token');
        return api(originalRequest);
      } catch (error: any) {
        console.log('Error: ', error.response.data);
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
