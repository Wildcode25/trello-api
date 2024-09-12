export class CardController {
  constructor(CardModel) {
    this.CardModel = CardModel;
  }
  createCard = async (req, res) => {
    const { name, listId, createdById = null, done = false } = req.body;

    const result = validateData({ Schema: cardSchema, input: req.body });
    if (!result.success)
      throw new CustomizedError({ message: result.error.message, code: 400 });

    const createdCard = await this.CardModel.createCard({
      data: { name, listId, color, createdById, done },
    });
    res.json(createdCard);
  };
  updateCard = async (req, res) => {
    const { id } = req.params;
    const updatedList = await this.ListModel.updateList({
      id,
      data: req.body,
    });
    res.json(updatedList);
  };
  deleteCard = async (req, res) => {
    const { id } = req.params;
    const deletedList = await this.ListModel.deleteList({ id });
    res.json(deletedList);
  };
}
