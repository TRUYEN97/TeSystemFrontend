import { useQuery } from "@tanstack/react-query";

import { getTeamById } from "../../../api/teams";

const useGetTeamById = (id?: string | number) => {
  return useQuery({
    queryKey: [`team_${id}`],
    queryFn: async () => {
      return await getTeamById(id as string | number);
    },
    enabled: !!id,
  });
};

export default useGetTeamById;
