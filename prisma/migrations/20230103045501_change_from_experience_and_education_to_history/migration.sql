-- CreateTable
CREATE TABLE "History" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "endedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "resumeId" TEXT,
    "profileId" TEXT,

    CONSTRAINT "History_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

INSERT INTO "History" SELECT * FROM "Education";
INSERT INTO "History" SELECT * FROM "Experience";