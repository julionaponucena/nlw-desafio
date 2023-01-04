export type ICreateUser ={
    name:string
    admin:boolean,
    email:string,
    password:string
}

export interface ICreateUserService {
    execute(createUser:ICreateUser):Promise<void>
}