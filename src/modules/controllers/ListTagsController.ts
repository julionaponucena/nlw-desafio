import { Request, Response } from "express";
import { container } from "tsyringe";
import { IListTagService } from "../services/IListTagService";
import { ListTagsService } from "../services/implementation/ListTagsService";

export class ListTagsController{
    private listTagService : IListTagService
    constructor(listTagService?: IListTagService){
        if(listTagService){
            this.listTagService =listTagService
        }
        else{
            this.listTagService = container.resolve(ListTagsService)
        }
    }

    async handle(request:Request,response:Response):Promise<void>{
        const tags = await this.listTagService.execute()
        response.json(tags)
    }
}

export default new ListTagsController()