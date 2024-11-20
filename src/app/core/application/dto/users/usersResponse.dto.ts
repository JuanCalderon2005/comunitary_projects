import { UserData } from "next-auth/providers/42-school";


export interface IGetUsersResponse {
  statusCode: number;
  message: string;
  data: UserData[];
}
