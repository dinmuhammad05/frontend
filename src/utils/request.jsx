import axios from "axios";
import Cookies from "js-cookie";

const request = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});

request.interceptors.request.use((config) => {
    const token = Cookies.get("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

request.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response?.status === 401) {
            Cookies.remove("token");
            window.location.href = "/login";
        }

        return Promise.reject(error);
    }
);

export { request };
