import { Request, Response } from "express";
import { container } from "tsyringe";
import { ICreateComplimentsService } from "../services/ICreateComplimentsService";
import { CreateComplimentsService } from "../services/implementation/CreateComplimentsService";

export class CreateComplimentsController {
    private complimentService : ICreateComplimentsService
    constructor(complimentService? : ICreateComplimentsService){
        if(complimentService){
            this.complimentService = complimentService
        }
        else{
            this.complimentService = container.resolve(CreateComplimentsService)
        }
    }
    async handle(request:Request,response:Response):Promise<void>{
        const {tag_id,user_sender,user_receiver,message} = request.body

        await this.complimentService.execute({tag_id,user_receiver,user_sender,message})

        response.status(201).send()
    }
}

export default new CreateComplimentsController()