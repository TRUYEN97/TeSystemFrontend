import { axiosClient } from "./services/axios-client";

export const getAllUser = async () => {
  return await axiosClient.get("/api/users");
};
