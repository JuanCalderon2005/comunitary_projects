import { ILoginRequest } from "../dto/auth/request-login.dto";
import { ILoginResponse } from "../dto/auth/response-login.dto";

export interface PAuth{
    /**
     * Login user
     * @param {ILoginRequest} - Login request
     * @returns {Promise<ILoginResponse>}Login response
     */
    
    login(req: ILoginRequest): Promise<ILoginResponse>
}