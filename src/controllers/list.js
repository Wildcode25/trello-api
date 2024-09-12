import { validateData } from "../schemas/validateData.js";
import { CustomizedError } from "../utils/errors.js";
export class ListController {
  constructor(ListModel) {
    this.ListModel = ListModel;
  }
  createList = async (req, res) => {
    const { name, boardId, color, createdById = null } = req.body;
    const createdList = await this.ListModel.createList({
      data: { name, boardId, color, createdById },
    });
    res.json({data: createdList, message: 'List created successfuly', error: false
    });
  };
  updateList = async (req, res) => {
    const { id } = req.params;

    const updatedList = await this.ListModel.updateList({ id, data: req.body });
    if(!updatedList) throw new CustomizedError({message: "List not found", code: 404})
    res.json({data: updatedList, message: 'List updated successfuly', error: false});
  };
  deleteList = async (req, res) => {
    const { id } = req.params;

    const deletedList = await this.ListModel.deleteList({ id });
    if(!deletedList) throw new CustomizedError({message: "List not found", code: 404})
    res.json({data: deletedList, message: 'List deleted successfuly'});
  };
}
