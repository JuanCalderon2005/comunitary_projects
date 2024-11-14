import { IResponseRegisterUsersDto } from "../dto/auth";

export interface PRegister{
    /**
     * Register user
     * @param {FormData} - Register request
     * @returns {Promise<IResponseRegisterUsersDto>}Register response
     */

    register(req: FormData): Promise<IResponseRegisterUsersDto>
    
}