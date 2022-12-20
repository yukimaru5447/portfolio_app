import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { styled } from '@mui/system'

import Logo from '@/components/atoms/Logo'
import StyledHeader from '@/components/atoms/Styled/StyledHeader'
import MenuGroups from '@/components/organisms/MenuGroups'

const StyledMenuGroups = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  marginRight: theme.spacing(4),
}))

export const Header: FC = () => {
  return (
    <StyledHeader>
      <Logo />
      <StyledMenuGroups>
        <MenuGroups />
      </StyledMenuGroups>
    </StyledHeader>
  )
}
