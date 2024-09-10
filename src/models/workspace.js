import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
export class WorkspaceModel{
    static async createWorkspace({name, userId}){
        const createdWorkspace = await prisma.workspace.create({
            data: {
                name: name,
                ownerId: userId
            }
        })
        return createdWorkspace
    }
    static async getWorkspaces({ownerId}){
        try{
            const gettedWorkspaces = await prisma.workspace.findMany({
                where: {
                    ownerId
                }
            })
            return gettedWorkspaces
        }catch(e){
            console.log(e.message)
        }
    }
}