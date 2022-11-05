import { postPortfolioSchema } from './portfolio'

describe('postPortfolioSchema', () => {
  test('受け取ったSchemaが正しいこと', () => {
    const protfolio = {
      title: 'ポートフォリオ1',
      description: '説明1',
      serviceUrl: 'https://test1.com',
      githubUrl: 'https://test1.com',
    }
    expect(postPortfolioSchema.parse(protfolio)).toEqual(protfolio)
  })

  // TODO:エラーメッセージのtest書く
})
