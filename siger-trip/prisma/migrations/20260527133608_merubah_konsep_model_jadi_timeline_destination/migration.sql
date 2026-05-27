/*
  Warnings:

  - You are about to drop the `Lodging` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Restaurant` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category` to the `Destination` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Lodging" DROP CONSTRAINT "Lodging_packageId_fkey";

-- DropForeignKey
ALTER TABLE "Restaurant" DROP CONSTRAINT "Restaurant_packageId_fkey";

-- AlterTable
ALTER TABLE "Destination" ADD COLUMN     "category" TEXT NOT NULL;

-- DropTable
DROP TABLE "Lodging";

-- DropTable
DROP TABLE "Restaurant";
