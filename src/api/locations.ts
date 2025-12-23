import { axiosClient } from "./services/axios-client";

export const getAllLocations = async () => {
  return await axiosClient.get('/api/locations')
}

export const getResourcesInLocation = async (id: string | number) => {
  return await axiosClient.get(`/api/locations/${id}/resources`)
}