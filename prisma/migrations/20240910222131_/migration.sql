/*
  Warnings:

  - Added the required column `done` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "done" BOOLEAN NOT NULL;
