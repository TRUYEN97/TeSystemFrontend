
export type TeamType = {
  id: number;
  departmentId: number;
  name: string;
}

export interface UserType {
  id: number;
  name: string;
  email: number;
  teams: TeamType[]
}