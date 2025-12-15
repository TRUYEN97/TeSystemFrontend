import { useMutation } from "@tanstack/react-query"

import { removeTeamFromUser } from "../../../api/users"

const useRemoveTeamFromUser = () => {
  const mutation = useMutation({
    mutationFn: async ({userId, teamId}: {userId: number, teamId: number}) => {
      return removeTeamFromUser(userId, teamId);
    } 
  })

  return mutation;
}

export default useRemoveTeamFromUser;