import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export class UserModel{
    static async getUser({email}){
        try{
            const user = await prisma.user.findUnique({
                where: {
                    email: email
                }
            })
            return user
        }catch(e){
            console.error(`Error getting user since db: ${e.message}`)
        }
        
    }
    static async createUser({data}){
        try{
            const createdUser = prisma.user.create({
                data: data
            })
            return createdUser;
        }catch(e){
            console.error(`Error creating user in databse: ${e.message}`)
        }
    }
}