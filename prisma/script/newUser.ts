import { PrismaClient, User } from '@prisma/client'

export const createNewUser = async (prisma: PrismaClient) => {
  const newUser: User = await prisma.user.create({
    data: {
      name: '山田太郎',
      email: 'taro@yama.com',
      portfolios: {
        create: [
          {
            title: `山田太郎のポートフォリオ1`,
            description: `私が3ヶ月で作りました。`,
            serviceUrl: `https://portfolio1.com`,
            githubUrl: `https://github.com/portfolio1`,
            isPublished: true,
          },
          {
            title: `山田太郎のポートフォリオ2`,
            description: `私が半年で作りました。`,
            serviceUrl: `https://portfolio2.com`,
            githubUrl: `https://github.com/portfolio2`,
            isPublished: true,
          },
        ],
      },
    },
  })

  await prisma.resume.create({
    data: {
      firstName: '山田',
      lastName: '太郎',
      firstNameKana: 'やまだ',
      lastNameKana: 'たろう',
      birthDay: new Date('1970-07-07').toISOString(),
      image: '',
      gender: 'MALE',
      userId: newUser.id,
      experiences: {
        create: [
          {
            name: '株式会社タロウ',
            description: '初めまして1',
            startedAt: new Date('2000-07-07').toISOString(),
            endedAt: new Date('2008-12-07').toISOString(),
            userId: newUser.id,
          },
          {
            name: '株式会社やまだ',
            description: '初めまして2',
            startedAt: new Date('2009-07-07').toISOString(),
            endedAt: new Date('2010-10-07').toISOString(),
            userId: newUser.id,
          },
        ],
      },
      educations: {
        create: [
          {
            name: 'テスト学校',
            description: '初めまして',
            startedAt: new Date('1997-04-01').toISOString(),
            endedAt: new Date('1999-3-31').toISOString(),
            userId: newUser.id,
          },
          {
            name: 'テスト学校2',
            description: '初めまして2',
            startedAt: new Date('1994-04-01').toISOString(),
            endedAt: new Date('1997-3-31').toISOString(),
            userId: newUser.id,
          },
        ],
      },
    },
  })
}
