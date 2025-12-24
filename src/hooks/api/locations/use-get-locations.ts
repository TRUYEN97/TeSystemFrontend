import { useQuery } from "@tanstack/react-query"
import { getAllLocations } from "../../../api/locations"

const useGetLocations = () => {
  return useQuery({
    queryKey: ['locations'],
    queryFn: async () => {
      return await getAllLocations();
    }
  })
}

export default useGetLocations;