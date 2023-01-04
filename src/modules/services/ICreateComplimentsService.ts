export type IComplimentRequest = {
    tag_id:string
    user_sender:string
    user_receiver:string
    message:string
}

export interface ICreateComplimentsService{
    execute(complimentRequest : IComplimentRequest):Promise<void>
}