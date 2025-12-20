import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { removeTeam } from "../../../api/teams";
import { ROUTE } from "../../../constants/routes";
import type { ErrorResponseType } from "../../../types/auth";

const useRemoveTeam = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (id: number | string) => {
      return await removeTeam(id);
    },
    onSuccess: () => {
      toast.success("Thành công");
      setTimeout(() => {
        navigate(ROUTE.TEAMS);
      }, 1000);
    },
    onError: (error: ErrorResponseType) => {
      toast.error(error.response.data.message || error.message);
    },
  });
};

export default useRemoveTeam;
