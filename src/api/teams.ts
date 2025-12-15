import { axiosClient } from "./services/axios-client";

export const getAllTeams = async () => {
  return await axiosClient.get("/api/teams");
};
