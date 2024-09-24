import { Router } from "express";
import { BoardController } from "../controllers/board.js";
import { craeteCatchedFunction } from "../utils/createCatchedfunction.js";

export function createBoardRouter(BoardModel){
    const boardRouter = new Router()
    const boardController = new BoardController(BoardModel)

    boardRouter.post('/', craeteCatchedFunction(boardController.createBoard))
    boardRouter.get('/:workspaceName', craeteCatchedFunction(boardController.getBoards))
    boardRouter.delete('/:id', craeteCatchedFunction(boardController.deleteBoard))
    return boardRouter
}