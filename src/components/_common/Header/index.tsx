import React, { FC } from 'react'
import { Logo } from '@/components/atoms'
import { MenuGroups } from '@/components/organisms'
import { SubmitButton } from '@/components/organisms'
import { useRouter } from 'next/router'

export const Header: FC = () => {
  const {
    query: { id },
    pathname,
  } = useRouter()

  const isDetailOrNew = !!id || pathname.match(/new/)

  // idまたはnewの場合はヘッダーのコンポーネントを切り替える
  return (
    <header className='flex justify-between border-b-2 border-gray-200 px-32'>
      <Logo />

      <div className='mr-4 flex justify-between space-x-4 p-4'>
        {isDetailOrNew ? <SubmitButton /> : <MenuGroups />}
      </div>
    </header>
  )
}
