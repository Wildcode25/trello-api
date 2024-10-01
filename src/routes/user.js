import { Router } from "express";
import { UserController } from "../controllers/user.js";
import { craeteCatchedFunction } from "../utils/createCatchedfunction.js";
export function createUserRouter(UserModel){
    const userRouter = Router()
    const userController = new UserController(UserModel)
    userRouter.get('/user', craeteCatchedFunction(userController.getUser))
    userRouter.post('/login', craeteCatchedFunction(userController.loginUser))
    userRouter.post('/register', craeteCatchedFunction(userController.registerUser))
    userRouter.use('/logout', craeteCatchedFunction(userController.logoutUser))
    return userRouter;

}