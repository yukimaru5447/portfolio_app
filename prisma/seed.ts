// https://github.com/TypeStrong/ts-node/issues/1062#issuecomment-1289772979
import { PrismaClient, Prisma, User } from '@prisma/client'

const prisma = new PrismaClient()

/** please execute 'yarn seed' on Command Line if you have a user account  */
async function main() {
  const users = await prisma.user.findMany()
  let newUser: User

  // ユーザーが存在しなければ実行
  if (!users.length) {
    newUser = await prisma.user.create({
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
    console.log(
      `ユーザーが存在しなかったため、ユーザーを新たに作成してポートフォリオを1つ作成しました`,
    )
    return
  }

  const dummyPublishedPortfolios: Prisma.PortfolioCreateManyArgs['data'] = []
  const numberOfPortfolios = [1, 2, 3, 4]

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

  console.log(`ユーザーに紐づく${numberOfPortfolios}個の投稿を作成しました🚀🚀`)
}

main()
  .catch((e) => {
    console.log(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
