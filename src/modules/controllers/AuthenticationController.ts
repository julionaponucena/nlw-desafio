import { Request, Response } from "express";
import { container } from "tsyringe";
import { IAuthenticationService } from "../services/IAuthenticationService";
import { AuthenticationService } from "../services/implementation/AuthenticationService";

export class AuthenticationController {
    private authenticationService :IAuthenticationService
    constructor(authenticationService?:IAuthenticationService){
        if(authenticationService){
            this.authenticationService = authenticationService
        }
        else{
            this.authenticationService = container.resolve(AuthenticationService)
        }
    }

    async handle(request:Request,response:Response):Promise<void>{
        const {email,password} =request.body

        const tokenResponse =await this.authenticationService.execute({email,password})

        response.json(tokenResponse)
    }
}

export default new AuthenticationController()