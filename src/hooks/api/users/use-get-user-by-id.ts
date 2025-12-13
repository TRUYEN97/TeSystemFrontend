import { useQuery,  } from "@tanstack/react-query";

import { getUserById } from "../../../api/users"
import { useNavigate } from "react-router-dom"
import { ROUTE } from "../../../constants/routes";
import { STALE_TIME } from "../../../constants/common";

const useGetUserById = (id?: string) => {
    const navigate = useNavigate();

    const query = useQuery({
        queryKey: ['user_by_id'],
        queryFn: async () => {
            if (!id || id === '0') {
                navigate(ROUTE.NOT_FOUND)
                return;
            }
            return await getUserById(id);
        },
        staleTime: STALE_TIME
    })

    return query;
}

export default useGetUserById;