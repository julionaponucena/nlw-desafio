import { autoInjectable, inject } from "tsyringe";
import { UserDto } from "../../../database/dtos/UserDto";
import { IUserRepository, userParams } from "../../repositories/IUserRepository";
import { IFindUserService } from "../IFindUserService";

@autoInjectable()
export class FindUserService implements IFindUserService {
    constructor(@inject('userRepository') private userRepository : IUserRepository){}

    async execute(userParams:userParams):Promise<UserDto|null>{
        return await this.userRepository.findOne({where:userParams})
    }
}