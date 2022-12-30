import { FC } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

import Loading from '@/components/atoms/Loading'
import CardContent from '@mui/material/CardContent'
import StyledAvatar from '@/components/atoms/Styled/StyledAvatar'

type Props = {
  profile:
    | {
        firstName: string
        lastName: string
        firstNameKana: string | null
        lastNameKana: string | null
        description: string | null
      }
    | undefined
}

const StyledProfileCard = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: 'flex',
  justifyContent: 'center',
}))
const StyledCard = styled(Card)(({ theme }) => ({
  minWidth: 400,
  borderRadius: theme.shape.borderRadius,
}))

const StyledNameKana = styled(Box)(({ theme }) => ({
  fontSize: 12,
  color: theme.palette.grey[600],
}))
const StyledName = styled(Typography)(() => ({
  fontSize: 20,
  fontWeight: 700,
}))
const StyledDescripton = styled(Typography)(() => ({
  fontSize: 16,
  fontWeight: 500,
}))
const StyledCompanyName = styled(Typography)(() => ({
  fontSize: 16,
  fontWeight: 500,
}))

const ProfileCard: FC<Props> = ({ profile }) => {
  if (!profile) return <Loading />

  const { firstName, lastName, firstNameKana, lastNameKana, description } =
    profile

  return (
    <StyledProfileCard>
      <StyledCard elevation={2}>
        <CardContent component={Stack} spacing={2}>
          <StyledAvatar
            src='https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
            alt='ユーザーアバター'
            width={60}
            height={60}
          />
          <Box>
            <StyledNameKana>
              {firstNameKana} {lastNameKana}
            </StyledNameKana>
            <StyledName>
              {firstName} {lastName}
            </StyledName>
          </Box>
          <StyledDescripton>{description}</StyledDescripton>
          <StyledCompanyName>まるまる株式会社</StyledCompanyName>
        </CardContent>
      </StyledCard>
    </StyledProfileCard>
  )
}

export default ProfileCard
