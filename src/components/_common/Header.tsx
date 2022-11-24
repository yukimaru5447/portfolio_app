import React, { FC } from 'react'
import { signOut } from 'next-auth/react'
import { PencilIcon, PencilSquareIcon } from '@heroicons/react/24/solid'
import { Logo } from '@/components/atoms'
import { useTranslation } from 'react-i18next'
import { MenuGroup } from '@/components/organisms'
import { useRouter } from 'next/router'

export const Header: FC = () => {
  const { t } = useTranslation(['common', 'home', 'portfolio'])
  const router = useRouter()

  const itemsAboutPortfolio = [
    {
      name: t('portfolio:AddPortfolio'),
      onClick: () => router.push('/portfolios/new'),
      icon: (
        <PencilIcon className='h-5 w-5 text-slate-400' aria-hidden='true' />
      ),
    },
    {
      name: t('portfolio:EditDraft'),
      onClick: () => router.push('/portfolios/new'),
      icon: (
        <PencilSquareIcon
          className='h-5 w-5 text-slate-400'
          aria-hidden='true'
        />
      ),
    },
  ]
  const itemsAboutMenu = [
    {
      name: t('common:Profile'),
      onClick: () => router.push(`/profile`),
      icon: (
        <PencilIcon className='h-5 w-5 text-slate-400' aria-hidden='true' />
      ),
    },
    {
      name: t('common:Logout'),
      onClick: () => signOut(),
      icon: (
        <PencilSquareIcon
          className='h-5 w-5 text-slate-400'
          aria-hidden='true'
        />
      ),
    },
  ]
  return (
    <header className='justify-between bg-slate-300 md:flex'>
      <Logo />

      <div className='mr-4 flex justify-between space-x-4 p-4'>
        <MenuGroup items={itemsAboutPortfolio} menuName={t('common:Post')} />
        <MenuGroup items={itemsAboutMenu} menuName={t('common:Menu')} />
      </div>
    </header>
  )
}
