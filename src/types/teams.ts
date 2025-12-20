export interface TeamType {
  id: number;
  departmentId: number;
  departmentName: string;
  name: string;
  memberCount: number;
}

export type NewTeamRequestType = {
  name: string;
  departmentId: number;
}

export type UpdateTeamRequestType = {
  name: string;
}