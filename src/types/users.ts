import type { TeamType } from "./teams";

export interface UserType {
  id: number;
  name: string;
  email: string;
  teams: TeamType[];
};

export type UserUpdateData = {
  name: string;
  email: string;
};

export type UserTeamRequestType = {
  userId: number;
  teamId: number;
};

export type NewUserRequestType = {
  name: string;
  email: string;
  username: string;
  password: string;
  teams: number[];
};
