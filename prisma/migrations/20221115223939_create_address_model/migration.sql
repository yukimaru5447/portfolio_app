-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "phoneNumber" INTEGER,
    "mail" TEXT,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);
