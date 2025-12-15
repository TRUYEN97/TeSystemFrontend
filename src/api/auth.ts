import { axiosClient } from "./services/axios-client";
import type {
  LoginRequestType,
  LogoutRequestType,
  SignUpRequestType,
} from "../types/auth";

export const register = async (data: SignUpRequestType) => {
  return await axiosClient.post("api/auth/register", data);
};

export const login = async (data: LoginRequestType) => {
  return await axiosClient.post("api/auth/login", data);
};

export const logout = async (data: LogoutRequestType) => {
  return await axiosClient.post("/api/auth/logout", data);
};
