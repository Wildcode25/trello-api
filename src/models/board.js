import { PrismaClient } from "@prisma/client";
import { CustomizedError } from "../utils/errors.js";
const prisma = new PrismaClient()
export class BoardModel{
    static async createBoard(data){
        try{
            const createdBoard = prisma.board.create({data})
            return createdBoard
        }catch(e){
            throw new CustomizedError({message: e.message, code: 500})
        }
    }

    static async getBoards({workspaceName, ownerId}){
        try{
            const gettedBoards = await prisma.board.findMany({
                where: {
                    workspaceName,
                    ownerId
                },
                include: {
                    lists: {
                        include: {
                            cards: true
                        }
                    },
                    
                }
            })
            return gettedBoards
        }catch(e){
            console.log(`Error getting boards: ${e.message}`)
        }
    }
    static async deleteBoard({id}){
        try{
            const deletedBoard = await prisma.board.delete({where: {id}})
            return deletedBoard
        }catch(e){

        }
    }
}