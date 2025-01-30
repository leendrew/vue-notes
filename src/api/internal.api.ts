import axios from 'axios';
import { envConfig } from '@/config';

export const apiInternal = axios.create({
  baseURL: envConfig.apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiInternal.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export interface ApiResponseFail {
  message: string | string[];
  error: string;
  statusCode: number;
}
