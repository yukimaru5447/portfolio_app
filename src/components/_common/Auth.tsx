import { signIn } from 'next-auth/react'
import React, { FC } from 'react'

export const Auth: FC = () => {
  return (
    <div className='flex w-2/6 flex-col items-center justify-center space-y-6 rounded bg-white py-10 shadow'>
      <h1 className='text-center text-2xl font-bold text-indigo-600'>
        Welcome to PortfolioApp
      </h1>
      <button
        className='w-4/5 rounded bg-gray-300 px-4 py-2 text-sm text-white hover:bg-gray-500 focus:ring-2 focus:ring-gray-700'
        onClick={() => signIn()}
      >
        新規登録・ログイン
      </button>
    </div>
  )
}
