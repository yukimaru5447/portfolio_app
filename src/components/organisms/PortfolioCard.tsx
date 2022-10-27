import Image from 'next/image'
import React, { FC } from 'react'

export const PortfolioCard: FC = () => {
  return (
    <div className="m-4 h-72 w-96">
      <a
        href="#"
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
          <h3 className="text-xl font-bold">
            制作物を共有できるサービスをNext.jsで作成する
          </h3>
        </div>
      </a>
    </div>
  )
}
