import React, { FC } from 'react'
import { styled } from '@mui/system'

import { Logo } from '@/components/atoms'
import { MenuGroups } from '@/components/organisms'
import Box from '@mui/material/Box'
import StyledHeader from '@/components/atoms/Styled/StyledHeader'

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
