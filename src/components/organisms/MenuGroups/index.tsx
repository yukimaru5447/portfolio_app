import { FC } from 'react'
import { signOut } from 'next-auth/react'
import CreateIcon from '@mui/icons-material/Create'
import EditIcon from '@mui/icons-material/Edit'
import LogoutIcon from '@mui/icons-material/Logout'

import MenuGroup from '@/components/molucules/MenuGroup'
import useHooks from './hooks'

const MenuGroups: FC = () => {
  const { t, moveToPage } = useHooks()
  const itemsAboutPortfolio = [
    {
      label: t('portfolio:AddPortfolio'),
      onClick: () => moveToPage('/portfolios/new'),
      icon: <CreateIcon />,
    },
    {
      label: t('portfolio:EditDraft'),
      onClick: () => moveToPage('/portfolios/new'),
      icon: <EditIcon />,
    },
  ]
  const itemsAboutMenu = [
    {
      label: t('common:Logout'),
      onClick: () => signOut(),
      icon: <LogoutIcon />,
    },
  ]

  return (
    <>
      <MenuGroup items={itemsAboutPortfolio} name={t('common:Post')} />
      <MenuGroup items={itemsAboutMenu} name={t('common:Menu')} />
    </>
  )
}

export default MenuGroups
