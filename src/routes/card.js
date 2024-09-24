import { Router } from "express"
import { CardController } from "../controllers/card.js"
import { craeteCatchedFunction } from "../utils/createCatchedfunction.js"

export const createCardRouter = (CardModel)=>{
    const cardRouter = Router()
    const cardController = new CardController(CardModel)

    cardRouter.post('/', craeteCatchedFunction(cardController.createCard))
    cardRouter.put('/:id', craeteCatchedFunction(cardController.updateCard))
    cardRouter.delete('/:id', craeteCatchedFunction(cardController.deleteCard))

    return cardRouter
}