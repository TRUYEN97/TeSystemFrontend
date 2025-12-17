import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { removeUser } from "../../../api/users";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../constants/routes";

const useRemoveUser = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (id: number | string) => {
      return await removeUser(id);
    },
    onSuccess: () => {
      toast.success("Xóa thành công", { autoClose: 1000 });
      setTimeout(() => navigate(ROUTE.USERS), 1000);
    },
    onError: () => {
      toast.error("Xóa thật bại, Vui lòng thử lại", { autoClose: 1000 });
    },
  });
};

export default useRemoveUser;
