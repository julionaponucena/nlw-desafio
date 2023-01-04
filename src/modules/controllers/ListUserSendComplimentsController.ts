import { Request, Response } from "express";
import { container } from "tsyringe";
import { IListUserSendComplimentsService } from "../services/IListUserSendComplimentsService";
import { ListUserSendComplimentsService } from "../services/implementation/LisUserSendComplimentsService";

export class ListUserSendComplimentsController{
    private listUserSendService : IListUserSendComplimentsService
    constructor(listUserSendService? :IListUserSendComplimentsService){
        if(listUserSendService){
            this.listUserSendService = listUserSendService
        }
        else{
            this.listUserSendService = container.resolve(ListUserSendComplimentsService)
        }
    }
    
    async handle(request : Request,response: Response):Promise<void>{
        const {sub} = request.user
        const compliments = await this.listUserSendService.execute(sub)

        response.json(compliments)
    }
}

export default new ListUserSendComplimentsController()