import { FC, ReactNode } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import { StyledButton } from '@/components/atoms/Styled/StyledButton'

import useHooks from './hooks'
import Box from '@mui/material/Box'

type Props = {
  items: {
    label: string
    onClick: () => void
    icon: ReactNode
  }[]
  name: string
}

const ItemButton = styled(Button)(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: 0,
}))

const StyledIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.primary.main,
}))

const StyledLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}))

const MenuGroup: FC<Props> = ({ items, name }) => {
  const { open, handleOpenMenu, handleCloseMenu, anchorEl } = useHooks()

  return (
    <>
      <StyledButton variant='contained' onClick={handleOpenMenu}>
        {name}
      </StyledButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleCloseMenu}>
        {items.map(({ label, onClick, icon }) => {
          return (
            <MenuItem
              component={ItemButton}
              key={label}
              onClick={onClick}
              startIcon={<StyledIcon>{icon}</StyledIcon>}
            >
              <StyledLabel>{label}</StyledLabel>
            </MenuItem>
          )
        })}
      </Menu>
    </>
  )
}

export default MenuGroup
