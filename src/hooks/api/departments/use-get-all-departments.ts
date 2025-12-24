import { useQuery } from "@tanstack/react-query";

import { getAllDepartments } from "../../../api/departments";

const useGetAllDepartments = () => {
  const query = useQuery({
    queryKey: ["all_departments"],
    queryFn: async () => {
      return await getAllDepartments();
    },
  });

  return query;
};

export default useGetAllDepartments;
