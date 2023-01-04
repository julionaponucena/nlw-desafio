import { compare } from "bcrypt";
import { autoInjectable, inject, registry } from "tsyringe";
import {sign} from 'jsonwebtoken'
import { AppError } from "../../../errors/AppError";
import { AuthenticationServiceResponse, IAuthenticationRequest, IAuthenticationService } from "../IAuthenticationService";
import { IFindUserService } from "../IFindUserService";
import { FindUserService } from "./FindUserService";



@autoInjectable()
@registry([{token:'findUserService',useClass:FindUserService}])
export class AuthenticationService implements IAuthenticationService {
    constructor(@inject('findUserService') private findUserService:IFindUserService){}
    async execute({email,password}:IAuthenticationRequest):Promise<AuthenticationServiceResponse>{
        const user =await this.findUserService.execute({email})

        if(!user){
            throw new AppError('Email or passwor incorrect')
        }

        const passwordMatch =await compare(password,user.password)

        if(!passwordMatch){
            throw new AppError('Email or passwor incorrect')
        }

        const token = sign({email:user.email,admin:user.admin},"cb321661-79cf-4b28-960c-446332c82036",
        {
            subject:user.id,
            expiresIn:'1d'
        })
        
        return {token}
    }
}