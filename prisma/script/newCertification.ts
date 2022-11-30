import { PrismaClient } from '@prisma/client'

export const createNewCertification = async (prisma: PrismaClient) => {
  const users = await prisma.user.findMany()

  for (const user of users) {
    await prisma.certification.createMany({
      data: [
        {
          name: 'TOEIC 700点',
          startedAt: new Date('2000-07-07').toISOString(),
          endedAt: new Date('2008-12-07').toISOString(),
          userId: user.id,
        },
        {
          name: '日商簿記 2級',
          startedAt: new Date('2009-07-07').toISOString(),
          endedAt: new Date('2010-10-07').toISOString(),
          userId: user.id,
        },
      ],
    })
  }
}
