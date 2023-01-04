import { Entity,PrimaryColumn, Column, JoinColumn, ManyToOne, CreateDateColumn } from "typeorm"
import { v4 as uuid } from "uuid"
import { ComplimentDTO } from "../dtos/ComplimentDTO"
import { Tag } from "./Tag"
import { User } from "./User"

@Entity('compliments')
export class Compliment implements ComplimentDTO {

    @PrimaryColumn()
    readonly id : string

    @Column()
    user_sender: string


    @JoinColumn({name:'user_sender'})
    @ManyToOne(() => User)
    userSender : User

    @Column()
    user_receiver : string

    @JoinColumn({name:'user_receiver'})
    @ManyToOne(() => User)
    userReceiver : User

    

    @Column()
    tag_id : string

    @JoinColumn({name:'tag_id'})
    @ManyToOne(()=>Tag)
    tag : Tag

    @Column()
    message : string

    @CreateDateColumn()
    created_at : Date

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}