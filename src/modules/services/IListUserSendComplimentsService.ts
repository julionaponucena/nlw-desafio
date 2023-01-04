import { ComplimentDTO } from "../../database/dtos/ComplimentDTO";

export interface IListUserSendComplimentsService{
    execute(user_id:string):Promise<ComplimentDTO[]>
}