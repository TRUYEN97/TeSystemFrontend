import { useQuery } from "@tanstack/react-query";

import { getAllUser } from "../../../api/users";

const useGetUsers = () => {
  const query = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      return await getAllUser();
    },
    staleTime: 0,
  });

  return query;
};

export default useGetUsers;
