import { axiosClient } from "./services/axios-client";

export const getAllProducts = async () => {
  return await axiosClient.get("/products");
};
