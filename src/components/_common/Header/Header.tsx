import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { styled } from '@mui/system'

import Logo from '@/components/atoms/Logo'
import StyledHeader from '@/components/atoms/Styled/StyledHeader'
import MenuGroups from '@/components/organisms/MenuGroups'
import SearchBlock from '@/components/organisms/SearchBlock'

const StyledMenuGroups = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  marginRight: theme.spacing(4),
}))

const Header: FC = () => {
  return (
    <StyledHeader sx={{ borderBottom: `1px solid #9dabb1` }}>
      <Logo />
      <SearchBlock />
      <StyledMenuGroups>
        <MenuGroups />
      </StyledMenuGroups>
    </StyledHeader>
  )
}

export default Header
