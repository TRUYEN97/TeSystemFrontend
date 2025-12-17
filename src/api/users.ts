import type {
  NewUserRequestType,
  UserTeamRequestType,
  UserUpdateData,
} from "../types/users";
import { axiosClient } from "./services/axios-client";

export const getAllUser = async () => {
  return await axiosClient.get("/api/users");
};

export const getUserById = async (id: string | number) => {
  return await axiosClient.get(`/api/users/${id}`);
};

export const updateUser = async (id: string | number, data: UserUpdateData) => {
  return await axiosClient.put(`/api/users/${id}`, data);
};

export const addTeamForUser = async (data: UserTeamRequestType) => {
  return await axiosClient.post("/api/user-teams", data);
};

export const removeTeamFromUser = async (userId: number, teamId: number) => {
  return await axiosClient.delete(
    `/api/user-teams/user/${userId}/team/${teamId}`,
  );
};

export const createNewUser = async (data: NewUserRequestType) => {
  return await axiosClient.post("/api/users", data);
};

export const removeUser = async (id: number | string) => {
  return await axiosClient.delete(`/api/users/${id}`);
};
