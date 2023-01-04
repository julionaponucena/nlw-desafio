import { Request, Response } from "express";
import { container } from "tsyringe";
import { ICreateTagService } from "../services/ICreateTagService";
import { CreateTagService } from "../services/implementation/CreateTagService";

export class CreateTagController {
    private tagService : ICreateTagService
    constructor(tagService? : ICreateTagService){
        if(tagService){
            this.tagService = tagService
        }
        else{
            this.tagService = container.resolve(CreateTagService)
        }
    }

    async handle(request:Request,response:Response):Promise<void>{
        const {name} = request.body

        await this.tagService.execute(name)

        response.status(201).send()
    }
}

export default new CreateTagController()