import React, { FC } from 'react'
import { styled } from '@mui/system'
import Stack from '@mui/material/Stack'
import SearchIcon from '@mui/icons-material/Search'

import CircleAvatar from '@/components/atoms/CircleAvatar'
import Logo from '@/components/atoms/Logo'
import StyledHeader from '@/components/atoms/Styled/StyledHeader'
import StyledIconButton from '@/components/atoms/Styled/StyledIconButton'
import MenuGroups from '@/components/organisms/MenuGroups'

const StyledMenuGroups = styled(Stack)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
}))

const Header: FC = () => {
  const userImage =
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
  return (
    <StyledHeader sx={{ borderBottom: `1px solid #e0e0e0` }}>
      <Logo />

      <StyledMenuGroups direction='row' spacing={2}>
        <StyledIconButton>
          <SearchIcon aria-label='search' fontSize='small' />
        </StyledIconButton>

        <CircleAvatar userImage={userImage} />

        <MenuGroups />
      </StyledMenuGroups>
    </StyledHeader>
  )
}

export default Header
