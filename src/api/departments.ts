import { axiosClient } from "./services/axios-client";

export const getAllDepartments = async () => {
  return await axiosClient.get("/api/departments");
};
