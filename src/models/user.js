import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class UserModel {
  static async getUser({ email }) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
        include: {
          workspaces: true,
          Collaborators: true 
        }
      });
      return user;
    } catch (e) {
      console.error(`Error getting user since db: ${e.message}`);
    }
  }
  static async createUser({ data }) {
    const {name, email, password}=data
    try {
      const createdUser = prisma.user.create({
        data:{
            name,
            email,
            password
        }
      });
      return createdUser;
    } catch (e) {
      console.error(`Error creating user in databse: ${e.message}`);
    }
  }
}
