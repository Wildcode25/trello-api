import { PrismaClient } from "@prisma/client";
import { CustomizedError } from "../utils/errors.js";
const prisma = new PrismaClient();
export class CardModel {
  static async getCards(listId){
    try{
      const cards = await prisma.card.findMany({
        where: {
          listId: listId
        }
      })
      return cards
    }catch(e){
      throw new CustomizedError({message: 'error getting cards in db', code:500})
    }
  }
  static async createCard({ data }) {
    try {
      const createdCard = await prisma.card.create({ data });
      return createdCard;
    } catch (e) {
      console.log(e.message)
     throw new CustomizedError({message: e.message, code:500})
    }
  }
  static async deleteCard({ id }) {
    try {
      const deletedCard = await prisma.card.delete({
        where: {
          id,
        },
      });
      return deletedCard;
    } catch (e) {
      console.error(`Error deleting list in db: ${e.message}`);
    }
  }
  static async updateCard({ id, data }) {
    try {
      const updateCard = await prisma.card.update({
        where: {
          id,
        },
        data,
      });
      return updateCard;
    } catch (e) {
      console.error(`Error updating list in  db: ${e.message}`);
    }
  }
}
