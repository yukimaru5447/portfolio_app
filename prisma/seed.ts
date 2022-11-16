// https://github.com/TypeStrong/ts-node/issues/1062#issuecomment-1289772979
import { PrismaClient } from '@prisma/client'
import { createNewPortfolio } from './script/newPortfolio'
import { createNewUser } from './script/newUser'

const prisma = new PrismaClient()

/** please execute 'yarn seed <newUser or newPortfolio>' on Command Line if you have a user account  */
async function main() {
  console.log(process.argv[2])

  if (process.argv[2] === 'newUser') {
    await createNewUser(prisma)
    console.log(
      `ユーザーが存在しなかったため、ユーザーを新たに作成してポートフォリオを1つ作成しました`,
    )
  }

  if (process.argv[2] === 'newPortfolio') {
    // ポートフォリオの数
    const numberOfPortfolios = [1, 2, 3, 4]
    await createNewPortfolio(prisma, numberOfPortfolios)

    console.log(
      `ユーザーに紐づく${numberOfPortfolios}個の投稿を作成しました🚀🚀`,
    )
  }
}

main()
  .catch((e) => {
    console.log(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
