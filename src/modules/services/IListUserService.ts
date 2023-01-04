import { UserDto } from "../../database/dtos/UserDto";

export type ResponseUserService ={
    id:string
    name:string
    email:string
    admin:boolean
    createdAt:Date
    updateAt:Date

}

export interface ILIstUserService {
    execute():Promise<ResponseUserService[]>
}