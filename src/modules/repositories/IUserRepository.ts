import {UserDto} from '../../database/dtos/UserDto'

export type userParams = Partial<UserDto>

type userOptions ={
    where: userParams
}

export interface IUserRepository {
    findOne(option:userOptions):Promise<UserDto | null>
    create(params:userParams):UserDto
    save(user:UserDto):Promise<void>
    find():Promise<UserDto[]>
}