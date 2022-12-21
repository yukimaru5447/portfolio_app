import { FC } from 'react'
import { signOut } from 'next-auth/react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import CreateIcon from '@mui/icons-material/Create'
import EditIcon from '@mui/icons-material/Edit'
import LogoutIcon from '@mui/icons-material/Logout'
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
      label: t('portfolio:AddPortfolio'),
      onClick: () => onTransitionPage('/portfolios/new'),
      icon: <CreateIcon />,
    },
    {
      label: t('portfolio:EditDraft'),
      onClick: () => onTransitionPage('/portfolios/new'),
      icon: <EditIcon />,
    },
  ]
  const itemsAboutMenu = [
    {
      label: t('common:Profile'),
      onClick: () => onTransitionPage(`/profile`),
      icon: <AccountCircleIcon />,
    },
    {
      label: t('common:Logout'),
      onClick: () => signOut(),
      icon: <LogoutIcon />,
    },
  ]

  return (
    <StyledStack direction='row' spacing={4}>
      <MenuGroup items={itemsAboutPortfolio} name={t('common:Post')} />
      <MenuGroup items={itemsAboutMenu} name={t('common:Menu')} />
    </StyledStack>
  )
}

export default MenuGroups
