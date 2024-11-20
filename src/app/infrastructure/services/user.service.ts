import { PRegister } from "@/app/core/application/ports/register.port";
import { HttpClient } from "../utils/client-http";
import { IGetUsersResponse } from "@/app/core/application/dto/users/usersResponse.dto";
import { IResponseRegisterUsersDto } from "@/app/core/application/dto/auth";

export class UserService implements PRegister{
    private clientHttp: HttpClient;
    constructor(){
        this.clientHttp = new HttpClient();
    }

    async getUsers():Promise<IGetUsersResponse>{
        return this.clientHttp.get<IGetUsersResponse>('users');
    }

    async register(req: FormData): Promise<IResponseRegisterUsersDto>{
        const formData = true;
        return this.clientHttp.post<IResponseRegisterUsersDto, FormData>(
            `users`,
            req,
            formData
        );
    }
}