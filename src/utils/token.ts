import { STORAGE_TOKEN } from "../constants/token";

export const getAccessToken = () => {
  return localStorage.getItem(STORAGE_TOKEN.ACCESS_TOKEN) || null;
};

export const getRefreshToken = () => {
  return localStorage.getItem(STORAGE_TOKEN.REFRESH_TOKEN) || null;
};

export const storeToken = (key: STORAGE_TOKEN, token: string) => {
  localStorage.setItem(key, token);
};
