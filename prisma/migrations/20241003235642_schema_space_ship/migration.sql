-- CreateTable
CREATE TABLE "spacesShips" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "passengerCapacity" INTEGER NOT NULL,

    CONSTRAINT "spacesShips_pkey" PRIMARY KEY ("id")
);
