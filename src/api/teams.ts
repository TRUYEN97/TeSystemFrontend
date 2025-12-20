import type { NewTeamRequestType, UpdateTeamRequestType } from "../types/teams";
import { axiosClient } from "./services/axios-client";

export const getAllTeams = async () => {
  return await axiosClient.get("/api/teams");
};

export const createNewTeam = async (data: NewTeamRequestType) => {
  return await axiosClient.post("/api/teams", data)
}

export const getTeamById = async (id: number | string) => {
  return await axiosClient.get(`/api/teams/${id}`);
}

export const updateTeam = async (id: number | string, data: UpdateTeamRequestType) => {
  return await axiosClient.put(`/api/teams/${id}`, data);
}

export const removeTeam = async (id: number | string) => {
  return await axiosClient.delete(`/api/teams/${id}`)
}