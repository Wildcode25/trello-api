/*
  Warnings:

  - You are about to drop the column `workspaceId` on the `Board` table. All the data in the column will be lost.
  - The primary key for the `Workspace` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Workspace` table. All the data in the column will be lost.
  - Added the required column `ownerId` to the `Board` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workSpaceName` to the `Board` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Board" DROP CONSTRAINT "Board_workspaceId_fkey";

-- AlterTable
ALTER TABLE "Board" DROP COLUMN "workspaceId",
ADD COLUMN     "ownerId" TEXT NOT NULL,
ADD COLUMN     "workSpaceName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Workspace" DROP CONSTRAINT "Workspace_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Workspace_pkey" PRIMARY KEY ("ownerId", "name");

-- AddForeignKey
ALTER TABLE "Board" ADD CONSTRAINT "Board_ownerId_workSpaceName_fkey" FOREIGN KEY ("ownerId", "workSpaceName") REFERENCES "Workspace"("ownerId", "name") ON DELETE CASCADE ON UPDATE CASCADE;
