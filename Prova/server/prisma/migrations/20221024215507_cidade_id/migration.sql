/*
  Warnings:

  - You are about to drop the column `doacao_id` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the column `cidade_id` on the `unidades` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "produtos" DROP COLUMN "doacao_id";

-- AlterTable
ALTER TABLE "unidades" DROP COLUMN "cidade_id";
