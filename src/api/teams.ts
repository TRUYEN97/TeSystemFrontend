import type { NewTeamRequestType } from "../types/teams";
import { axiosClient } from "./services/axios-client";

export const getAllTeams = async () => {
  return await axiosClient.get("/api/teams");
};

export const createNewTeam = async (data: NewTeamRequestType) => {
  return await axiosClient.post("/api/teams", data)
}