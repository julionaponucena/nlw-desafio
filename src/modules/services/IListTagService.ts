import { TagDTO } from "../../database/dtos/TagDTO";

export type ResponseTagService ={
    id:string
    name:string
    createdAt:Date
    updateAt:Date
    nameCustom:string
}

export interface IListTagService {
    execute():Promise<ResponseTagService[]>
}