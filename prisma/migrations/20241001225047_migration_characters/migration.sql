-- CreateTable
CREATE TABLE "characters" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "affiliation" TEXT NOT NULL,
    "planetId" UUID NOT NULL,

    CONSTRAINT "characters_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "characters" ADD CONSTRAINT "characters_planetId_fkey" FOREIGN KEY ("planetId") REFERENCES "planets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
