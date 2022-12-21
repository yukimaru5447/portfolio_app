import { FC } from 'react'
import { signIn } from 'next-auth/react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/system'

const StyledCard = styled(Stack)(({ theme }) => ({
  width: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5),
  backgroundColor: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
}))

const StyledTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontWeight: 700,
  color: theme.palette.primary.main,
}))

const ActionButton = styled(Button)(({ theme }) => ({
  width: '80%',
  borderRadius: '0.25rem',
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  backgroundColor: theme.palette.grey[600],
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.grey[500],
  },
}))

const AuthCard: FC = () => {
  return (
    <StyledCard spacing={2}>
      <StyledTitle variant='h4'>Welcome to PortfolioApp</StyledTitle>
      <ActionButton onClick={() => signIn()}>新規登録・ログイン</ActionButton>
    </StyledCard>
  )
}

export default AuthCard
