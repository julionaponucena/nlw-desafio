import { ComplimentDTO } from "../../database/dtos/ComplimentDTO";

export type complimentParams = Partial<ComplimentDTO>

export type complimentOptions ={
    where:complimentParams
    relations:string[]
}

export interface IComplimentsRepository{
    findOne(compliment : complimentOptions): Promise<ComplimentDTO |null>
    find(compliment:complimentOptions):Promise<ComplimentDTO[]>
    create(compliment : complimentParams):ComplimentDTO
    save(compliment : ComplimentDTO):Promise<void>
}