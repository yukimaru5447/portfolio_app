-- DropForeignKey
ALTER TABLE "Certification" DROP CONSTRAINT "Certification_resumeId_fkey";

-- DropForeignKey
ALTER TABLE "Education" DROP CONSTRAINT "Education_resumeId_fkey";

-- DropForeignKey
ALTER TABLE "Experience" DROP CONSTRAINT "Experience_resumeId_fkey";

-- AlterTable
ALTER TABLE "Certification" ALTER COLUMN "resumeId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Education" ALTER COLUMN "resumeId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Experience" ALTER COLUMN "resumeId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certification" ADD CONSTRAINT "Certification_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE SET NULL ON UPDATE CASCADE;
