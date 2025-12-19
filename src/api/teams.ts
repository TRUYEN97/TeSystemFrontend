import { axiosClient } from "./services/axios-client";

export const getAllTeams = async () => {
  return await axiosClient.get("/api/teams");
};

export const createNewTeam = async (data: any) => {
  return await axiosClient.post("/api/teams", data)
}