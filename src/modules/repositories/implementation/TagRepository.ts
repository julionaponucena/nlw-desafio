import { autoInjectable, registry } from "tsyringe";
import { DataSource, Repository } from "typeorm";
import { dataSource } from "../../../database";
import { Tag } from "../../../database/models/Tag";
import { ITagRepository } from "../ITagRepository";

@autoInjectable()
@registry([{token:DataSource,useValue:dataSource}])
export class TagRepository extends Repository<Tag> implements ITagRepository{

    constructor(private appData :DataSource){
        super(Tag,appData.createEntityManager())
    }
}