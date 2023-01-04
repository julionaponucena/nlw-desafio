import { Router } from "express";
import authenticationController from "../modules/controllers/AuthenticationController";

const authRouter = Router()

authRouter.post('/',(req,res)=>authenticationController.handle(req,res))

export {authRouter}