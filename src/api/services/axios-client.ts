import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";

import { getAccessToken } from "../../utils/token";

export const axiosClient = axios.create({
  baseURL: "https://fakestoreapi.com/",
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
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);
