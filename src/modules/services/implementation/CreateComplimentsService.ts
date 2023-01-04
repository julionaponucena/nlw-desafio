import { autoInjectable, inject, registry } from "tsyringe";
import { AppError } from "../../../errors/AppError";
import { IComplimentsRepository } from "../../repositories/IComplimentsRepository";
import { IComplimentRequest, ICreateComplimentsService } from "../ICreateComplimentsService";
import { IFindUserService } from "../IFindUserService";
import { FindUserService } from "./FindUserService";

@autoInjectable()
@registry([{token:'FindUserService',useClass:FindUserService}])
export class CreateComplimentsService implements ICreateComplimentsService {
    constructor(@inject('FindUserService') private findUserService : IFindUserService,
        @inject('ComplimentRepository') private complimentsRepository : IComplimentsRepository
    ){}
    async execute({tag_id,user_sender, user_receiver, message}:IComplimentRequest):Promise<void>{

        if(user_sender === user_receiver){
            throw new AppError('Incorrect User Receiver')
        }

        const userReceiverExists = await this.findUserService.execute({id:user_receiver})
        
        if(!userReceiverExists){
            throw new AppError('User Receiver does not exists')
        }

        const compliment = this.complimentsRepository.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        })

        await this.complimentsRepository.save(compliment)
    }
    
}