import { Router } from "express";
import { UserController } from "../controllers/user.js";

export function createUserRouter(UserModel){
    const userRouter = Router()
    const userController = new UserController(UserModel)
    userRouter.get('/user', userController.getUser)
    userRouter.post('/login', userController.loginUser)
    userRouter.post('/register', userController.registerUser)
    userRouter.use('/logout', userController.logoutUser)
    return userRouter;

}