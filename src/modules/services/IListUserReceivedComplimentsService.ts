import { ComplimentDTO } from "../../database/dtos/ComplimentDTO";
import { TagDTO } from "../../database/dtos/TagDTO";
import { UserDto } from "../../database/dtos/UserDto";



export type ResponseReceivedCompliment = {
    user_sender: string

    user_receiver : string

    tag_id : string

    message : string

    userSender:UserDto
    
    userReceiver:UserDto

    tag:TagDTO
}

export interface IListUserReceivedComplimentsService {
    execute(user_id:string):Promise<ComplimentDTO[]>
}