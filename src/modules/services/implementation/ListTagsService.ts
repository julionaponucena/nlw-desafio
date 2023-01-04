import { autoInjectable, inject } from "tsyringe";
import {ClassTransformer} from 'class-transformer'
import { TagDTO } from "../../../database/dtos/TagDTO";
import { ITagRepository } from "../../repositories/ITagRepository";
import { IListTagService, ResponseTagService } from "../IListTagService";

@autoInjectable()
export class ListTagsService implements IListTagService{
    constructor(@inject('TagRepository') private tagRepository : ITagRepository){}

    async execute():Promise<ResponseTagService[]>{
        const tags =await this.tagRepository.find()

        const classTransformer = new ClassTransformer()
        
        
        return classTransformer.instanceToPlain(tags) as ResponseTagService[]

    }
}