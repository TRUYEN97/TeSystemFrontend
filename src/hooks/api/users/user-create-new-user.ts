import { useMutation } from "@tanstack/react-query";

import type { NewUserRequestType } from "../../../types/users";
import { createNewUser } from "../../../api/users";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useCreateNewUser = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: NewUserRequestType) => {
      return await createNewUser(data);
    },
    onSuccess: (response) => {
      (toast.success("Thành công"),
        setTimeout(() => {
          navigate(`/users/${response.data.data.id}`);
        }, 100));
    },
    onError: (error) => {
      console.log("Create user fail", error.message);
      toast.error("Tạo không thành công");
    },
  });
};

export default useCreateNewUser;
