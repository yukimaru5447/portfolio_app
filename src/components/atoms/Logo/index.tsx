import { FC } from 'react'
import Link from 'next/link'

const Logo: FC = () => {
  return (
    <Link
      href={'/'}
      className='ml-4 p-4 text-2xl font-bold text-indigo-500 hover:text-indigo-700'
    >
      PortfolioApp
    </Link>
  )
}
export default Logo
