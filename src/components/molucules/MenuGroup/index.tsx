import { FC, ReactNode } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import { StyledButton } from '@/components/atoms/Styled/StyledButton'

import useHooks from './hooks'

type Props = {
  items: {
    name: string
    onClick: () => void
    icon: ReactNode
  }[]
  menuName: string
}

const ItemButton = styled(Button)(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: 0,
}))

const StyledName = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}))

const MenuGroup: FC<Props> = ({ items, menuName }) => {
  const { open, handleOpenMenu, handleCloseMenu, anchorEl } = useHooks()

  return (
    <>
      <StyledButton
        variant='contained'
        onClick={handleOpenMenu}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {menuName}
      </StyledButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleCloseMenu}>
        {items.map(({ name, onClick, icon }) => {
          return (
            <MenuItem
              component={ItemButton}
              key={name}
              onClick={onClick}
              startIcon={icon}
            >
              <StyledName>{name}</StyledName>
            </MenuItem>
          )
        })}
      </Menu>
    </>
  )
}

export default MenuGroup
