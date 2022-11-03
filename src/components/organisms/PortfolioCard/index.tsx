import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

type Props = {
  id: string
  title: string
}

const PortfolioCard: FC<Props> = ({ id, title }) => {
  return (
    <div className="m-4 h-72 w-96">
      <Link
        href={`portfolio/${id}`}
        className="block overflow-hidden rounded-lg border border-gray-100 shadow-sm"
      >
        <Image
          alt="Office"
          width={500}
          height={280}
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-44 w-full object-cover"
        />

        <div className="m-4 flex">
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </Link>
    </div>
  )
}

export default PortfolioCard
