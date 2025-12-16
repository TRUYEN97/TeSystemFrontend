export type TeamType = {
  id: number;
  departmentId: number;
  name: string;
};

export interface UserType {
  id: number;
  name: string;
  email: string;
  teams: TeamType[];
}

export type UserUpdateData = {
  name: string;
  email: string;
};

export type UserTeamRequestType = {
  userId: number;
  teamId: number;
};
