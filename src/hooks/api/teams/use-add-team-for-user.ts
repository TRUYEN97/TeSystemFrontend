import { useMutation } from "@tanstack/react-query"
import type { UserTeamRequestType } from "../../../types/users"
import { addTeamForUser } from "../../../api/users"

const useAddTeamForUser = () => {
  const mutation = useMutation({
    mutationFn: async (data: UserTeamRequestType) => {
      return addTeamForUser(data);
    } 
  })

  return mutation;
}

export default useAddTeamForUser;