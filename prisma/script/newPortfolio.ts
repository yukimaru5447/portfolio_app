import { PrismaClient, Prisma } from '@prisma/client'

export const createNewPortfolio = async (
  prisma: PrismaClient,
  numberOfPortfolios: number[],
) => {
  const users = await prisma.user.findMany()
  const dummyPublishedPortfolios: Prisma.PortfolioCreateManyArgs['data'] = []

  for (const user of users) {
    for (const num of numberOfPortfolios) {
      dummyPublishedPortfolios.push({
        title: `ポートフォリオ1${num}`,
        description: `${num}ヶ月で作りました。`,
        serviceUrl: `https://portfolio${num}.com`,
        githubUrl: `https://github.com/portfolio${num}`,
        userId: user.id,
        isPublished: true,
      })
    }
  }

  await prisma.portfolio.createMany({
    data: dummyPublishedPortfolios,
  })
}
