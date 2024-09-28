-- AlterTable
ALTER TABLE "planets" ADD COLUMN     "starSystemId" UUID;

-- CreateTable
CREATE TABLE "star_systems" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "star_systems_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "planets" ADD CONSTRAINT "planets_starSystemId_fkey" FOREIGN KEY ("starSystemId") REFERENCES "star_systems"("id") ON DELETE SET NULL ON UPDATE CASCADE;
