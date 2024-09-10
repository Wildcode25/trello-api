import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
export class BoardModel{
    static async createBoard(data){
        try{
            const createdBoard = prisma.board.create({data})
            return createdBoard
        }catch(e){
            console.error(`Error creating Board in db :${e.message}`)
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
                    }
                }
            })
            return gettedBoards
        }catch(e){
            console.log(`Error getting boards: ${e.message}`)
        }
    }
}