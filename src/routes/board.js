import { Router } from "express";
import { BoardController } from "../controllers/board.js";

export function createBoardRouter(BoardModel){
    const boardRouter = new Router()
    const boardController = new BoardController(BoardModel)

    boardRouter.post('/', boardController.createBoard)
    boardRouter.get('/', boardController.getBoards)

    return boardRouter
}