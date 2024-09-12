import { PrismaClient } from "@prisma/client";
import { CustomizedError } from "../utils/errors.js";
import { validateData } from "../schemas/validateData.js";
const prisma = new PrismaClient()
export class ListModel{

    static async createList({data}) {
        try{
            const result = validateData({Schema: boardSchema, input: req.body})
            if(!result.success)  throw new CustomizedError({message: result.error.message, code: 400}) 
            const createdList = await prisma.list.create({data})
            return createdList
        }catch(e){
            console.error(`Error creatting list: ${e.message}`)
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