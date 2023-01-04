import { DataSource } from "typeorm";
import { User } from "./models/User";
import {Tag} from './models/Tag'
import { Compliment } from "./models/Compliment";
import { migration1672755695422 } from "./migrations/1672755695422-migration";
import { migration1672767487889 } from "./migrations/1672767487889-migration";
import { migration1672833132333 } from "./migrations/1672833132333-migration";
import { migration1672833290788 } from "./migrations/1672833290788-migration";
import { migration1672833391699 } from "./migrations/1672833391699-migration";
import { migration1672842346338 } from "./migrations/1672842346338-migration";


export const dataSource = new DataSource({
    type:'sqlite',
    database:'main.sqlite',
    logging:['query','error'],
    migrations:[migration1672755695422,migration1672767487889,migration1672833132333,migration1672833290788,migration1672833391699,migration1672842346338],
    synchronize:true,
    migrationsRun:false,
    entities:[User,Tag,Compliment]
})