import axios from "axios";
export const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        "Content-Type": "application/json"
    }
})

export interface IResponse<T> {
  statusCode: number;
  message: {
    uz: string;
    en: string;
    ru: string;
  };
  data: T;
}

