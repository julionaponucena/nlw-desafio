import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthentication } from "../middlewares/ensureAuthentication";
import createTagController from "../modules/controllers/CreateTagController";
import ListTagsController from "../modules/controllers/ListTagsController";

const tagRouter = Router()

tagRouter.use(ensureAuthentication)
tagRouter.use(ensureAdmin)
tagRouter.post('/',(req,res)=>createTagController.handle(req,res))
tagRouter.get('/',(req,res)=> ListTagsController.handle(req,res))

export {tagRouter}