import { json } from "express";
import { boardSchema } from "../schemas/board.js";
import { validateData } from "../schemas/validateData.js";
import { CustomizedError } from "../utils/errors.js";
export class BoardController {
  constructor(BoardModel) {
    this.BoardModel = BoardModel;
  }

  createBoard = async (req, res) => {
    const ownerId = res.session.user.id;
    const result = validateData({ Schema: boardSchema, input: req.body });
    console.log(result.error.issues);
    if (!result.success) {
      throw new CustomizedError({
        message: "Validation Error",
        code: 400,
        data: result.error.issues,
      });
    }
    const createdBoard = await this.BoardModel.createBoard({
      ...req.body,
      ownerId,
    });
    res.json({data: createdBoard, message: 'Board created successfulty', error: false});
  };
  getBoards = async (req, res) => {
    const { workspaceName } = req.params;
    const ownerId = res.session.user.id;
    const gettedBoards = await this.BoardModel.getBoards({
      workspaceName,
      ownerId,
    });
    if (!gettedBoards)
      throw new CustomizedError({ message: "Boards not found", code: 404 });
    res.json({data: gettedBoards, message: null, error: false});
  };
  deleteBoard = async (req, res) => {
    const id = parseInt(req.params.id);
    const deletedBoard = await this.BoardModel.deleteBoard({ id });
    if(!deletedBoard) throw new CustomizedError({message: 'Board not found', code:404})
    res.json({data: deletedBoard, message: 'Board deleted successfuly', error: false});
  };
}
