import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export class CardModel {
  static async createCard({ data }) {
    try {
      const createdCard = await prisma.card.create({ data });
      return createdCard;
    } catch (e) {
      console.error(`Error creatting list: ${e.message}`);
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
