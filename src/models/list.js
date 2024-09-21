import { PrismaClient } from "@prisma/client";
import { validateData } from "../schemas/validateData.js";
import { CustomizedError } from "../utils/errors.js";
const prisma = new PrismaClient()
export class ListModel{

    static async createList({data}) {
        try{
            console.log('here')
            const createdList = await prisma.list.create({data})
            return createdList
        }catch(e){
            throw new CustomizedError({message: e.message})
        }
    }
    static async deleteList({id}){
        try{
            const deletedList = await prisma.list.delete({
                where: {
                    id
                }
            })
            if(!deletedList) throw new CustomizedError({message: "List not found", code:400})
            return deletedList
        }catch(e){
            console.error(`Error deleting list in db: ${e.message}`)
        }
    }
    static async updateList({id, data}){
        try{
            const updatedList = await prisma.list.update({
                where: {
                    id
                },
                data
            })
            return updatedList
        }catch(e){
            console.error(`Error updating list in  db: ${e.message}`)
        }
    }
}