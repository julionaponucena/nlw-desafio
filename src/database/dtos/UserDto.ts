export interface UserDto {
    readonly id:string
    name : string
    admin : boolean
    email : string
    password : string
    created_at : Date
    updated_at : Date
}