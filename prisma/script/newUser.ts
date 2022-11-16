import { PrismaClient, User } from '@prisma/client'

export const createNewUser = async (prisma: PrismaClient) => {
  const newUser: User = await prisma.user.create({
    data: {
      name: '山田太郎',
      email: 'taro@yama.com',
    },
  })

  await prisma.portfolio.create({
    data: {
      title: `${newUser.name}のポートフォリオ`,
      description: `${newUser.name}が3ヶ月で作りました。`,
      serviceUrl: `https://portfolio.com`,
      githubUrl: `https://github.com/portfolio`,
      userId: newUser.id,
      isPublished: true,
    },
  })
  const birthDay = new Date('1970-07-07').toISOString()
  const resume = await prisma.resume.create({
    data: {
      firstName: '山田',
      lastName: '太郎',
      firstNameKana: 'やまだ',
      lastNameKana: 'たろう',
      birthDay,
      image: '',
      gender: 'MALE',
      userId: newUser.id,
    },
  })

  await prisma.experience.createMany({
    data: [
      {
        name: '株式会社タロウ',
        description: '初めまして1',
        startedAt: new Date('2000-07-07').toISOString(),
        endedAt: new Date('2008-12-07').toISOString(),
        userId: newUser.id,
        resumeId: resume.id,
      },
      {
        name: '株式会社やまだ',
        description: '初めまして2',
        startedAt: new Date('2009-07-07').toISOString(),
        endedAt: new Date('2010-10-07').toISOString(),
        userId: newUser.id,
        resumeId: resume.id,
      },
    ],
  })
  await prisma.education.createMany({
    data: [
      {
        name: 'テスト学校',
        description: '初めまして',
        startedAt: new Date('1997-04-01').toISOString(),
        endedAt: new Date('1999-3-31').toISOString(),
        userId: newUser.id,
        resumeId: resume.id,
      },
    ],
  })
}
