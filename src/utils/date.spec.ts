import dayjs from 'dayjs'
import 'dayjs/locale/ja'
import * as logic from './date'

dayjs.locale('ja')

describe('getDate', () => {
  it('YYYY月M月D日にフォーマットされた日付が返ってくること', () => {
    // https://typescriptbook.jp/reference/statements/unknown#%E5%9E%8B%E3%82%A2%E3%82%B5%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E5%88%B6%E7%B4%84%E3%82%92%E5%9B%9E%E9%81%BF%E3%81%99%E3%82%8B
    const date =
      'Wed Mar 31 1999 00:00:00 GMT+0900 (日本標準時)' as unknown as Date
    expect(logic.getDateYYYYM(date)).toEqual('1999年3月')
  })
})
