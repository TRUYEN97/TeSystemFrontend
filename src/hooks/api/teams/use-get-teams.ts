import { useQuery } from "@tanstack/react-query";

import { getAllTeams } from "../../../api/teams";

const useGetTeams = () => {
  const query = useQuery({
    queryKey: ["teams"],
    queryFn: async () => {
      return await getAllTeams();
    },
  });

  return query;
};

export default useGetTeams;
