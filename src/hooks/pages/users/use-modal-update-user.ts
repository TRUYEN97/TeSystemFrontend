import { useMemo, useState, type ChangeEvent } from "react";
import { toast } from "react-toastify";

import type { UserType } from "../../../types/users";
import useUpdateUser from "../../api/users/use-update-user";
import useGetTeams from "../../api/teams/use-get-teams";
import useRemoveTeamFromUser from "../../api/teams/use-remove-team-from-user";
import useAddTeamForUser from "../../api/teams/use-add-team-for-user";

type UserInputData = {
  name?: string;
  email?: string;
  teams: number[];
};

const useModalUpdateUser = (user: UserType, closeModal: () => void) => {
  const updateMutation = useUpdateUser();
  const addTeamToUser = useAddTeamForUser();
  const removeTeamMutation = useRemoveTeamFromUser();

  const { data: teamsData } = useGetTeams();

  const [inputData, setInputData] = useState<UserInputData>({
    name: user.name,
    email: user.email,
    teams: user.teams.map((team) => team.id) || [],
  });

  const teams = useMemo(() => teamsData?.data?.data ?? [], [teamsData]);
  const originalTeamIds = user.teams.map((team) => team.id);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const syncUserTeams = async () => {
    const removedTeams = originalTeamIds.filter(
      (id) => !inputData.teams.includes(id),
    );
    const newTeams = inputData.teams.filter(
      (id) => !originalTeamIds.includes(id),
    );

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
    if (!inputData.name?.trim() || !inputData.email?.trim()) {
      toast.error("Không để trống dữ liệu!");
      return false;
    }
    return true;
  };

  const handleSave = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    if (!verifyData()) return;
    try {
      await syncUserTeams();
      const data = {
        name: inputData?.name || "",
        email: inputData?.email || "",
      };
      setTimeout(async () => {
        await updateMutation.mutate({ id: user.id, data });
      }, 50);
      toast.success("Cập nhật người dùng thành công");
      closeModal();
    } catch (error) {
      toast.error("Có lỗi xảy ra, vui lòng thử lại");
    }
  };

  return {
    inputData,
    setInputData,
    handleInputChange,
    handleSave,
    teams,
  };
};

export default useModalUpdateUser;
