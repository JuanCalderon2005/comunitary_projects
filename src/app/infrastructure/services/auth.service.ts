import { PAuth } from "@/app/core/application/ports/auth.port";
import { HttpClient } from "../utils/client-http";
import {
  IRequestRegisterUsersDto,
  IResponseRegisterUsersDto,
} from "@/app/core/application/dto/auth";
import { ILoginRequest } from "@/app/core/application/dto/auth/request-login.dto";
import { ILoginResponse } from "@/app/core/application/dto/auth/response-login.dto";

export class AuthService implements PAuth {
  private clientHttp: HttpClient;
  private basePath: string = "auth";

  constructor() {
    this.clientHttp = new HttpClient();
  }

  async login(request: ILoginRequest): Promise<ILoginResponse> {
    return await this.clientHttp.post<
      ILoginResponse,
      ILoginRequest
    >(`${this.basePath}/login`, request);
  }

  async register(
    request: IRequestRegisterUsersDto
  ): Promise<IResponseRegisterUsersDto> {
    return await this.clientHttp.post<
      IResponseRegisterUsersDto,
      IRequestRegisterUsersDto
    >(`${this.basePath}/register`, request);
  }
}
