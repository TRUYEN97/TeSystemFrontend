import { useState, type ChangeEvent } from "react";
import { toast} from "react-toastify";

import type { UserType } from "../../../types/users";
import useUpdateUser from "../../api/users/use-update-user";
import useGetTeams from "../../api/teams/use-get-teams";
import type { TeamType } from "../../../types/teams";
import useRemoveTeamFromUser from "../../api/teams/use-remove-team-from-user";
import useAddTeamForUser from "../../api/teams/use-add-team-for-user";

type UserInputData = {
  name?: string;
  email?: string;
  teams: number[];
};

const useModalUpdateUser = (user: UserType, closeModal: () => void,) => {
  const updateMutation = useUpdateUser();
  
  const addTeamToUser = useAddTeamForUser();
  const removeTeamMutation = useRemoveTeamFromUser();

  const { data: teamsData } = useGetTeams();

  const [inputData, setInputData] = useState<UserInputData>({
    name: user.name,
    email: user.email,
    teams: user.teams.map(team => team.id) || [],
  });

  const teams: TeamType[] = teamsData?.data.data;
  const teamIds = teams?.map((team: TeamType) => team.id)
  const originTeamId = user?.teams?.map(team => team.id);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const checkAndUpdateTeamsChanged = async () => {
    const removedTeams = teamIds.filter(id => !inputData.teams.includes(id));
    const newTeams = inputData.teams.filter(id => !originTeamId.includes(id));

    if (removedTeams.length === 0 && newTeams.length === 0) {
        return false;
    }

    const removePromises = removedTeams.map(async (teamId) => {
        await removeTeamMutation.mutate({ userId: user.id, teamId: teamId });
    });

    const addPromises = newTeams.map(async (teamId) => {
        await addTeamToUser.mutate({ userId: user.id, teamId: teamId });
    });

    await Promise.all([...removePromises, ...addPromises]);

    return true;
};

  const verifyData = () => {
    if (!inputData?.name || !inputData.email) {
      toast("Không để trống dữ liệu!", { type: "error" });
      return false;
    }
    if (inputData.name === user.name && inputData.email === user.email && !checkAndUpdateTeamsChanged()) {
      toast("Không thay đổi dữ liêu nào!", { type: "warning" });
      return false;
    }
    return true;
  };

  const handleSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (!verifyData()) return;

    const data = {
      name: inputData?.name || "",
      email: inputData?.email || "",
    };
    updateMutation.mutate({ id: user.id, data });
    closeModal();
  };

  return {
    inputData, 
    setInputData,
    handleInputChange,
    handleSave,
    teams
  }
}

export default useModalUpdateUser;