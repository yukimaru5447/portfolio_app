import { PrismaClient } from '@prisma/client'

export const createNewHistory = async (prisma: PrismaClient) => {
  const users = await prisma.user.findMany()

  for (const user of users) {
    await prisma.history.createMany({
      data: [
        {
          name: 'テスト学校',
          description: '初めまして',
          startedAt: new Date('1997-04-01').toISOString(),
          endedAt: new Date('1999-3-31').toISOString(),
          userId: user.id,
        },
        {
          name: 'テスト学校2',
          description: '初めまして2',
          startedAt: new Date('1994-04-01').toISOString(),
          endedAt: new Date('1997-3-31').toISOString(),
          userId: user.id,
        },
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
