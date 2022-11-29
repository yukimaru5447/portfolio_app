import { PrismaClient } from '@prisma/client'

export const createNewEducation = async (prisma: PrismaClient) => {
  const users = await prisma.user.findMany()

  for (const user of users) {
    await prisma.education.createMany({
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
      ],
    })
  }
}
