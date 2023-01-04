import { autoInjectable, inject } from "tsyringe";
import { UserDto } from "../../../database/dtos/UserDto";
import {ClassTransformer} from 'class-transformer'
import { IUserRepository } from "../../repositories/IUserRepository";
import { ILIstUserService, ResponseUserService } from "../IListUserService";

@autoInjectable()
export class ListUserService implements ILIstUserService {
    constructor(@inject('UserRepository') private userRepository: IUserRepository){}
    
    async execute():Promise<ResponseUserService[]>{
        const users = await this.userRepository.find()
        const classTransformer = new ClassTransformer()
        return classTransformer.instanceToPlain(users) as ResponseUserService[]
    }
}