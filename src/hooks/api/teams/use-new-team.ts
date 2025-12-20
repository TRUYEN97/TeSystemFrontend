import { useMutation } from "@tanstack/react-query";

import { createNewTeam } from "../../../api/teams";
import type { NewTeamRequestType } from "../../../types/teams";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import type { ErrorResponseType } from "../../../types/auth";

const useNewTeam = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: NewTeamRequestType) => {
      return await createNewTeam(data);
    },
    onSuccess: (response) => {
      toast.success("Tạo mới thành công!");
      setTimeout(() => {
        navigate(`/teams/${response?.data.data.id}`);
      }, 1000);
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error?.response?.data?.message || error.message, {
        autoClose: 3000,
      });
    },
  });
};

export default useNewTeam;
