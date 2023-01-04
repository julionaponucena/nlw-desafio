import { autoInjectable, registry } from 'tsyringe';
import {Repository,DataSource} from 'typeorm'
import { User } from '../../../database/models/User';
import { dataSource } from '../../../database';
import { IUserRepository } from '../IUserRepository';

@autoInjectable()
@registry([{token:DataSource,useValue:dataSource}])
export class UserRepository extends Repository<User> implements IUserRepository{
    constructor(private appData: DataSource)
    {
        super(User, appData.createEntityManager());
    }
}