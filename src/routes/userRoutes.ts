import { Router } from "express";
import createUserController from "../modules/controllers/CreateUserController";
import { ensureAuthentication } from "../middlewares/ensureAuthentication";
import listUserReceivedComplimentsController from "../modules/controllers/ListUserReceivedComplimentsController";
import listUserSendComplimentsController from "../modules/controllers/ListUserSendComplimentsController";
import listUserController from "../modules/controllers/ListUserController";

const userRouter = Router()

userRouter.use(ensureAuthentication)
userRouter.post('/',(req,res)=>createUserController.handle(req,res))
userRouter.get('/',(req,res)=>listUserController.handle(req,res))
userRouter.get('/compliments/received',(req,res)=> listUserReceivedComplimentsController.handle(req,res))
userRouter.get('/compliments/send',(req,res)=> listUserSendComplimentsController.handle(req,res))


export {userRouter}