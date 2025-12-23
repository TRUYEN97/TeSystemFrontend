import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getResourcesInLocation } from "../../../api/locations"

const useGetResourcesInLocation = (id?: string | number) => {
  return useQuery({
    queryKey: [`resources_location`, `${id}`],
    queryFn: async () => {
      return await getResourcesInLocation(id!);
    },
    enabled: !!id,
    placeholderData: keepPreviousData
  })
}

export default useGetResourcesInLocation;