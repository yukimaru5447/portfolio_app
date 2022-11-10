// https://github.com/TypeStrong/ts-node/issues/1062#issuecomment-1289772979
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

/** please execute 'yarn seed' on Command Line if you have a user account  */
async function main() {
  const users = await prisma.user.findMany()
  const dummyPublishedPortfolios: Prisma.PortfolioCreateManyArgs['data'] = []

  for (const user of users) {
    for (const num of [1, 2, 3, 4]) {
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

main()
  .catch((e) => {
    console.log(e)
    process.exit(1)
  })
  .finally(async () => {
    console.log('ユーザーに紐づく投稿を作成しました🚀')

    await prisma.$disconnect()
  })
