import React, { FC } from 'react'
import { Logo } from '@/components/atoms'
import { MenuGroups } from '@/components/organisms'

export const Header: FC = () => {
  // idまたはnewの場合はヘッダーのコンポーネントを切り替える
  return (
    <header className='flex justify-between border-b-2 border-gray-200 md:px-32'>
      <Logo />

      <div className='mr-4 flex justify-between space-x-4 p-4'>
        <MenuGroups />
      </div>
    </header>
  )
}
