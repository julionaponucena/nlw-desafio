import { Router } from "express"
import { userRouter } from "./userRoutes"
import { tagRouter } from "./tagRouter"
import { authRouter } from "./authRouter"
import { complimentRoutes } from "./complimentRouter"

const router = Router()

router.use('/users',userRouter)
router.use('/tags',tagRouter)
router.use('/auth',authRouter)
router.use('/compliments',complimentRoutes)

export {router}