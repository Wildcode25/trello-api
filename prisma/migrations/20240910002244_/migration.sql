/*
  Warnings:

  - You are about to drop the column `workSpaceName` on the `Board` table. All the data in the column will be lost.
  - Added the required column `workspaceName` to the `Board` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Board" DROP CONSTRAINT "Board_ownerId_workSpaceName_fkey";

-- AlterTable
ALTER TABLE "Board" DROP COLUMN "workSpaceName",
ADD COLUMN     "workspaceName" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Board" ADD CONSTRAINT "Board_ownerId_workspaceName_fkey" FOREIGN KEY ("ownerId", "workspaceName") REFERENCES "Workspace"("ownerId", "name") ON DELETE CASCADE ON UPDATE CASCADE;
