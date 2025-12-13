import type { UserUpdateData } from "../types/users";
import { axiosClient } from "./services/axios-client";

export const getAllUser = async () => {
  return await axiosClient.get("/api/users");
};

export const getUserById = async (id: string | number) => {
  return await axiosClient.get(`/api/users/${id}`)
}

export const updateUser = async (id: string | number, data: UserUpdateData) => {
  return await axiosClient.put(`/api/users/${id}`, data)
}
