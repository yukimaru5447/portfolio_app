import { PrismaClient } from '@prisma/client'

export const createNewExperience = async (prisma: PrismaClient) => {
  const users = await prisma.user.findMany()

  for (const user of users) {
    await prisma.experience.createMany({
      data: [
        {
          name: '株式会社タロウ',
          description: '初めまして1',
          startedAt: new Date('2000-07-07').toISOString(),
          endedAt: new Date('2008-12-07').toISOString(),
          userId: user.id,
        },
        {
          name: '株式会社やまだ',
          description: '初めまして2',
          startedAt: new Date('2009-07-07').toISOString(),
          endedAt: new Date('2010-10-07').toISOString(),
          userId: user.id,
        },
      ],
    })
  }
}
