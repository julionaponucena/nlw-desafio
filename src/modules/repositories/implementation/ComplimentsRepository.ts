import { autoInjectable, registry } from "tsyringe";
import { DataSource, Repository } from "typeorm";
import { dataSource } from "../../../database";
import { Compliment } from "../../../database/models/Compliment";
import { IComplimentsRepository } from "../IComplimentsRepository";

@autoInjectable()
@registry([{token:DataSource,useValue:dataSource}])
export class ComplimentsRepository extends Repository<Compliment> implements IComplimentsRepository{
    constructor(private appData :DataSource){
        super(Compliment,appData.createEntityManager())
    }
}