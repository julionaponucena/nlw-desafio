import { autoInjectable, inject } from "tsyringe";
import { ComplimentDTO } from "../../../database/dtos/ComplimentDTO";
import { IComplimentsRepository } from "../../repositories/IComplimentsRepository";
import { IListUserReceivedComplimentsService, ResponseReceivedCompliment } from "../IListUserReceivedComplimentsService";

@autoInjectable()
export class ListUserReceiveComplimentsService implements IListUserReceivedComplimentsService {
    constructor(@inject('ComplimentRepository') private complimentsRepository : IComplimentsRepository ){}

    async execute(user_id:string):Promise<ComplimentDTO[]>{
        const compliments =await this.complimentsRepository.find({where:{user_receiver:user_id},relations:["userSender","userReceiver","tag"]})
        console.log(compliments)
        return compliments
    }
}