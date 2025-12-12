import { useQuery } from "@tanstack/react-query";

import { getAllUser } from "../../../api/users";
import { STALE_TIME } from "../../../constants/common";

const useGetUsers = () => {
    const query = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            return await getAllUser()
        },
        staleTime: STALE_TIME,
    })

    return query;
}

export default useGetUsers;