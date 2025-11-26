import axios from 'axios';
import Cookies from 'js-cookie';

export const api = axios.create({
  baseURL: 'https://9mbn3t91-3000.euw.devtunnels.ms/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export interface IResponse<T> {
  statusCode: number;
  message: {
    uz: string;
    en: string;
    ru: string;
  };
  data: T;
}

export interface IResponsePagination<T> {
  currentPage: number;
  pageSize: number;
  to: number;
  totalElements: number;
  totalPages: number;
  statusCode: number;

  message: {
    uz: string;
    en: string;
    ru: string;
  };
  data: T[];
}
