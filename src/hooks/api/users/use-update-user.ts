import { useMutation, useQueryClient } from "@tanstack/react-query"

import type { UserUpdateData } from "../../../types/users"
import { updateUser } from "../../../api/users"
import { toast } from "react-toastify"
import type { AxiosResponse } from "axios"

const useUpdateUser = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async ({ id, data }: { id: string | number, data: UserUpdateData }) => {
            return await updateUser(id, data);
        },
        onSuccess: async (user) => {
            queryClient.setQueryData([`user_id_${user.data.data.id}`], (oldData: AxiosResponse) => {
                const newData = {
                    ...oldData,
                    ...user
                }
                return newData;
            });
            toast("Cập nhật thành công", {
                type: "success",
                autoClose: 2000,
                }
            )
        },
        onError: () => {
            toast("Cập nhật thất bại", {
                type: "error",
                autoClose: 2000,
                }
            )
        }
    })

    return mutation;
}

export default useUpdateUser;