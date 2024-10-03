import { CardSchema } from "../schemas/card.js";
import { CustomizedError } from "../utils/errors.js";
import { validateData } from "../schemas/validateData.js";
export class CardController {
  constructor(CardModel) {
    this.CardModel = CardModel;
  }
  getCards = async (req, res)=>{
    const listId = parseInt(req.params.listId)
    if(!listId) throw new CustomizedError({message: "Invalid id", code: 400})
    const cards = await this.CardModel.getCards(listId)  
    if(cards===undefined) throw new CustomizedError({message: 'Error unkhow getting cards', code: 500})
      res.json({data: cards, message: "", error: false})
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
    const  id  = parseInt(req.params.id);
    const {name, listId} = req.body 
    if(!id) throw new CustomizedError({message: 'Invalid id', code: 400})
      
      console.log(id, listId)
      try{
        const updatedCard = await this.CardModel.updateCard({
          id,
          data: {listId, name},
        });
      res.json({data: updatedCard, message: 'Card updated successfuly', error: false});
      }catch(e){
        console.error(e.message)
      }
  };
  deleteCard = async (req, res) => {
    const  id  = parseInt(req.params.id);
    const deletedCard = await this.CardModel.deleteCard({ id });
    res.json({data: deletedCard, message: 'Card deleted successfuly', error: false});
  };
}
