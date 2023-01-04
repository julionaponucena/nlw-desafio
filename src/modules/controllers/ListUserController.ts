import { Request,Response } from "express";
import { container } from "tsyringe";
import { ILIstUserService } from "../services/IListUserService";
import { ListUserService } from "../services/implementation/ListUserService";

export class ListUserController {
    private listUserService : ILIstUserService
    constructor(listUserService? : ILIstUserService){
        if(listUserService){
            this.listUserService= listUserService
        }
        else{
            this.listUserService = container.resolve(ListUserService)
        }
    }

    async handle(request:Request,response:Response):Promise<void>{
        const users = await this.listUserService.execute()

        response.json(users)
    }
}

export default new ListUserController()