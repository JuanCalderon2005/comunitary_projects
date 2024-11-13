export interface ILoginResponse {
    statusCode: number;
    message: string;
    data: LoginData;
}

export interface LoginData {
    access_token: string;
    user: User;
}

export interface User {
    email: string;
    sub: number;
    role: string;
    photo: string;
}