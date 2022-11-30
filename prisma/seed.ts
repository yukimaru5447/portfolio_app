// https://github.com/TypeStrong/ts-node/issues/1062#issuecomment-1289772979
import { PrismaClient } from '@prisma/client'
import { createNewCertification } from './script/newCertification'
import { createNewEducation } from './script/newEducation'
import { createNewExperience } from './script/newExperience'
import { createNewPortfolio } from './script/newPortfolio'
import { createNewUser } from './script/newUser'

const prisma = new PrismaClient()

/** please execute 'yarn seed <newUser or newPortfolio>' on Command Line if you have a user account  */
async function main() {
  if (process.argv[2] === 'newUser') {
    await createNewUser(prisma)
    console.log(
      `ユーザーが存在しなかったため、ユーザーを新たに作成してポートフォリオを1つ作成しました🚀🚀`,
    )
    return
  }

  if (process.argv[2] === 'newPortfolio') {
    // ポートフォリオの数
    const numberOfPortfolios = [1, 2, 3, 4]
    await createNewPortfolio(prisma, numberOfPortfolios)

    console.log(
      `ユーザーに紐づく${numberOfPortfolios}個の投稿を作成しました🚀🚀`,
    )
    return
  }

  if (process.argv[2] === 'newEducation') {
    await createNewEducation(prisma)

    console.log(`学歴を追加しました🚀`)
    return
  }

  if (process.argv[2] === 'newExperience') {
    await createNewExperience(prisma)

    console.log(`職歴歴を追加しました🚀`)
    return
  }

  if (process.argv[2] === 'newCertification') {
    await createNewCertification(prisma)

    console.log(`資格を追加しました🚀`)
    return
  }

  console.log('何も作成されませんでした。引数を指定してください')
}

main()
  .catch((e) => {
    console.log(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
