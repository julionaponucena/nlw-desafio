import { Request, Response } from "express";
import { injectable, container, inject, registry } from "tsyringe";
import { ICreateUserService } from "../services/ICreateUserService";
import { CreateUserService } from "../services/implementation/CreateUserService";

@injectable()
@registry([{token:'userService',useValue:CreateUserService}])

export class CreateUserController {
    private userService: ICreateUserService
    constructor(userService?: ICreateUserService){
        if(userService){
            this.userService = userService
        }
        else{
            this.userService =container.resolve(CreateUserService)
        }
    }
    async handle(request:Request,response:Response):Promise<void>{
        const {name,admin,email,password} = request.body
       
        await this.userService.execute({name,admin,email,password})

        response.status(201).send()
    }
}

export default new CreateUserController()