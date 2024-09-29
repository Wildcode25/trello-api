import { CardSchema } from "../schemas/card.js";
import { CustomizedError } from "../utils/errors.js";
import { validateData } from "../schemas/validateData.js";
export class CardController {
  constructor(CardModel) {
    this.CardModel = CardModel;
  }
  createCard = async (req, res) => {
    const { name, listId, createdById = null, done = false } = req.body;
    const result = validateData({ Schema: CardSchema, input: req.body });
    if (!result.success)
      throw new CustomizedError({ message: result.error.message, code: 400 });
    const createdCard = await this.CardModel.createCard({
      data: { name, listId, createdById, done }
    });
    res.json({data: createdCard, message: 'Card created successfuly', error: false});
  };
  updateCard = async (req, res) => {
    const { id } = req.params;
    const updatedList = await this.ListModel.updateList({
      id,
      data: req.body,
    });
    res.json({data: updatedList, message: 'Card updated successfuly', error: false});
  };
  deleteCard = async (req, res) => {
    const  id  = parseInt(req.params.id);
    const deletedCard = await this.CardModel.deleteCard({ id });
    res.json({data: deletedCard, message: 'Card deleted successfuly', error: false});
  };
}
