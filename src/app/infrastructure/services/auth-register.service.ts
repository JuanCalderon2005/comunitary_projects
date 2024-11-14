
import { PRegister } from "@/app/core/application/ports/register.port";
import { HttpClient } from "../utils/client-http";
import { IResponseRegisterUsersDto } from "@/app/core/application/dto/auth";

export class RegisterService implements PRegister{
    private clientHttp: HttpClient;

    constructor(){
        this.clientHttp = new HttpClient();
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