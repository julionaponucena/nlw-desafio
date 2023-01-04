import { autoInjectable, inject } from "tsyringe";
import { AppError } from "../../../errors/AppError";
import { ITagRepository,tagOptions } from "../../repositories/ITagRepository";
import { ICreateTagService } from "../ICreateTagService";

@autoInjectable()
export class CreateTagService implements ICreateTagService{
    constructor(@inject('TagRepository') private tagRepository : ITagRepository){}

    async execute(name : string):Promise<void>{

        if(!name){
            throw new AppError('name must be not empty')
        }

        const alreadyExist = await this.tagRepository.findOne({where:{name}})

        if(alreadyExist){
            throw new AppError('tag alredy exist')
        }

        const tag = this.tagRepository.create({name})
        
        
        await this.tagRepository.save(tag)       
    }
}