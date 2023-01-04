import 'reflect-metadata'
import './shared/container/'
import 'express-async-errors'
import { dataSource } from "./database";
import express from 'express'
import {router} from './routes/'
import { errorMidleware } from './middlewares/error';

async function run(){
   await dataSource.initialize()

 

   const app = express()
   app.use(express.json())
   app.use(router)
   app.use(errorMidleware)

   app.listen(3333,()=>console.log('server is running'))
   
}

run().catch(console.error)