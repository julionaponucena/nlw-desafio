import { dataSource } from "../../../database"
import { UserRepository } from "../../repositories/implementation/UserRepository"
import {autoInjectable, inject, registry} from 'tsyringe'
import { IUserRepository } from "../../repositories/IUserRepository"
import {ICreateUser} from '../ICreateUserService'
import { AppError } from "../../../errors/AppError"
import { hash } from "bcrypt"




@autoInjectable()
@registry([{token:'userRepository',useClass:UserRepository}])
export class CreateUserService {
    constructor(@inject('userRepository') private userRepository:IUserRepository){}
    async execute({name,admin=false,email,password}:ICreateUser):Promise<void>{
       
        const alreadyExist =await this.userRepository.findOne({where:{email}})

        if(alreadyExist){
            throw new AppError('user alredy exists')
        }

    
        const hashPassword =await hash(password,8)
        const user=this.userRepository.create({name,admin,email,password:hashPassword})
        await this.userRepository.save(user)
    }
}