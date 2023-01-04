export interface ICreateTagService {
    execute(name:string):Promise<void>
}