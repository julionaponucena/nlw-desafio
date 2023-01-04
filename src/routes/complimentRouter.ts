import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthentication } from "../middlewares/ensureAuthentication";
import createComplimentController from "../modules/controllers/CreateComplimentController";

const complimentRoutes = Router()

complimentRoutes.use(ensureAuthentication)
complimentRoutes.use(ensureAdmin)

complimentRoutes.post('/',(req,res)=>createComplimentController.handle(req,res))




export {complimentRoutes}