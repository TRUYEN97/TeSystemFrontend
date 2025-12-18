import axios, { AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from "axios";

import { clearToken, getAccessToken } from "../../utils/token";

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: "application/json, text/plain, */*",
  },
});

axiosClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  }
);

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {return response},
  (error: AxiosError) => {
    if(error.response?.status === 401) {
      clearToken();
    }
    return error;
  }
)
