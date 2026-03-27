import {Router} from 'express'
import * as AuthController from "../controller/auth.controller.js"
const authRouter = Router()


authRouter.post("/register", AuthController.register)
export default authRouter