import { Router } from "express"
import { ListController } from "../controllers/list.js"
import { craeteCatchedFunction } from "../utils/createCatchedfunction.js"

export const createListRouter = (ListModel)=>{
    const listRouter = Router()
    const listController = new ListController(ListModel)

    listRouter.post('/', craeteCatchedFunction(listController.createList))
    listRouter.put('/:id', craeteCatchedFunction(listController.updateList))
    listRouter.delete('/:id', craeteCatchedFunction(listController.deleteList))

    return listRouter
}