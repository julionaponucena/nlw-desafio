import { container } from "tsyringe"
import { Request,Response } from "express"
import { IListUserReceivedComplimentsService } from "../services/IListUserReceivedComplimentsService"
import { ListUserReceiveComplimentsService } from "../services/implementation/ListUserReceiveComplimentsService"

export class ListUserReceivedComplimentsController{
    private listUserSendService : IListUserReceivedComplimentsService
    constructor(listUserSendService? :IListUserReceivedComplimentsService){
        if(listUserSendService){
            this.listUserSendService = listUserSendService
        }
        else{
            this.listUserSendService = container.resolve(ListUserReceiveComplimentsService)
        }
    }
    
    async handle(request : Request,response: Response):Promise<void>{
        const {sub} = request.user
        const compliments = await this.listUserSendService.execute(sub)

        response.json(compliments)
    }
}

export default new ListUserReceivedComplimentsController()