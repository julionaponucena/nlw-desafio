import { TagDTO } from "../../database/dtos/TagDTO"

export type tagParams = Partial<TagDTO>

export type tagOptions = {
    where:tagParams
}

export interface ITagRepository {
    findOne(tag:tagOptions):Promise<TagDTO |null >
    create(tag: tagParams):TagDTO
    save(tag : TagDTO):void
    find():Promise<TagDTO[]>
}