import dayjs from 'dayjs'
import 'dayjs/locale/ja'

dayjs.locale('ja')

export const getDateYYYYM = (date: Date) => dayjs(date).format('YYYY年M月')
