/*
  Warnings:

  - You are about to drop the `LaunchX` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "LaunchX";

-- CreateTable
CREATE TABLE "Launchx" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lang" VARCHAR(255) NOT NULL,
    "missionCommander" VARCHAR(255) NOT NULL,
    "enrollments" INTEGER NOT NULL DEFAULT 0,
    "hasCertification" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Launchx_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Launchx_name_key" ON "Launchx"("name");
