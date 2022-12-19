import { FC } from 'react'
import { signOut } from 'next-auth/react'
import {
  ArrowLeftOnRectangleIcon,
  PencilIcon,
  PencilSquareIcon,
  UserCircleIcon,
} from '@heroicons/react/24/solid'
import { styled } from '@mui/system'
import Stack from '@mui/material/Stack'

import MenuGroup from '@/components/molucules/MenuGroup'
import useHooks from './hooks'

const StyledStack = styled(Stack)(() => ({
  display: 'flex',
}))

const MenuGroups: FC = () => {
  const { t, onTransitionPage } = useHooks()
  const itemsAboutPortfolio = [
    {
      name: t('portfolio:AddPortfolio'),
      onClick: () => onTransitionPage('/portfolios/new'),
      icon: (
        <PencilIcon className='h-5 w-5 text-slate-400' aria-hidden='true' />
      ),
    },
    {
      name: t('portfolio:EditDraft'),
      onClick: () => onTransitionPage('/portfolios/new'),
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
      onClick: () => onTransitionPage(`/profile`),
      icon: (
        <UserCircleIcon className='h-5 w-5 text-slate-400' aria-hidden='true' />
      ),
    },
    {
      name: t('common:Logout'),
      onClick: () => signOut(),
      icon: (
        <ArrowLeftOnRectangleIcon
          className='h-5 w-5 text-slate-400'
          aria-hidden='true'
        />
      ),
    },
  ]

  return (
    <StyledStack direction='row' spacing={4}>
      <MenuGroup items={itemsAboutPortfolio} menuName={t('common:Post')} />
      <MenuGroup items={itemsAboutMenu} menuName={t('common:Menu')} />
    </StyledStack>
  )
}

export default MenuGroups
