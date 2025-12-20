import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateTeam } from "../../../api/teams";
import type { UpdateTeamRequestType } from "../../../types/teams";
import { toast } from "react-toastify";
import type { ErrorResponseType } from "../../../types/auth";
import type { AxiosResponse } from "axios";

type UpdateTeamType = {
  id: number | string;
  data: UpdateTeamRequestType;
};

const useUpdateTeam = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }: UpdateTeamType) => {
      return await updateTeam(id, data);
    },
    onSuccess: (data) => {
      toast.success("Cập nhật thành công");
      queryClient.setQueryData(
        [`team_${data.data.data.id}`],
        (oldData: AxiosResponse) => {
          return {
            ...oldData,
            ...data,
          };
        },
      );
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error.response.data.message || error.message);
    },
  });
};

export default useUpdateTeam;
