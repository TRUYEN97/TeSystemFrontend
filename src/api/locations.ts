import { axiosClient } from "./services/axios-client";

export const getAllLocations = async () => {
  return await axiosClient.get('/api/locations')
}