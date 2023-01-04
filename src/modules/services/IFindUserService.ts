import { UserDto } from "../../database/dtos/UserDto";
import { userParams } from "../repositories/IUserRepository";

export interface IFindUserService {
    execute(userParams:userParams):Promise<UserDto | null>
}