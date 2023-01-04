import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import {Expose} from 'class-transformer'
import { v4 as uuid} from 'uuid'
import { TagDTO } from "../dtos/TagDTO";

@Entity('tags')
export class Tag implements TagDTO {
    @PrimaryColumn()
    readonly id:string

    @Column()
    name:string

    

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updateAt:Date

    @Expose({name:'nameCustom'})
    nameCustom():string{
        return `#${this.name}`
    }

    constructor(){
        if(!this.id){
            this.id =uuid() 
        }
    }
}