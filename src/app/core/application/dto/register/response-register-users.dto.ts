export interface DataDto {
  email: string;
  name: string;
  role: string;
  photo: string | null;
  id: number;
}

export interface IResponseRegisterUsersDto {
  statusCode: number;
  message: string;
  data: DataDto;
}
