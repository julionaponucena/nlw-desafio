import { autoInjectable, inject } from "tsyringe";
import { IComplimentsRepository } from "../../repositories/IComplimentsRepository";
import { IListUserSendComplimentsService } from "../IListUserSendComplimentsService";

@autoInjectable()
export class ListUserSendComplimentsService implements IListUserSendComplimentsService{
    constructor(@inject('ComplimentRepository') private complimentsRepository : IComplimentsRepository){}

    async execute(user_Id :string){
        const compliments = await this.complimentsRepository.find({where:{user_sender:user_Id}})
        return compliments
    }
}