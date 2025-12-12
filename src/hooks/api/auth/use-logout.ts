import { useMutation } from "@tanstack/react-query";

import { logout } from "../../../api/auth";
import type { LogoutRequestType } from "../../../types/auth";

const useLogout = () => {
    const logoutMutation = useMutation({
        mutationFn: async (data: LogoutRequestType) => {
            return await logout(data);
        },
    })

    return logoutMutation;
}

export default useLogout;