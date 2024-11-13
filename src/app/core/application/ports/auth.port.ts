import { IRequestRegisterUsersDto, IResponseRegisterUsersDto } from "../dto/auth";

export interface PAuth{
    register(request:IRequestRegisterUsersDto):Promise<IResponseRegisterUsersDto>
}