export type IAuthenticationRequest = {
    email:string
    password:string
}

export type AuthenticationServiceResponse = {
    token: string
}

export interface IAuthenticationService {
    execute(authUser:IAuthenticationRequest):Promise<AuthenticationServiceResponse>
}