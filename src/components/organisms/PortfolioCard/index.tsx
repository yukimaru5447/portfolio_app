import { FC } from 'react'
import Image from 'next/image'
import { styled } from '@mui/system'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import Link from '@/components/atoms/Link'

type Props = {
  id: string
  title: string
}

const StyledLink = styled(Link)(({ theme }) => ({
  display: 'block',
  overflow: 'hidden',
  borderRadius: theme.shape.borderRadius,
}))

const StyledImage = styled(Image)(() => ({
  height: '10rem',
  objectFit: 'cover',
}))

const StyledCardContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}))

const StyledTitle = styled(Typography)(() => ({
  fontWeight: 700,
}))

const PortfolioCard: FC<Props> = ({ id, title }) => {
  return (
    <StyledLink href={`portfolios/${id}`}>
      <StyledImage
        alt='Office'
        width={500}
        height={280}
        src='https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      />

      <StyledCardContent>
        <StyledTitle variant='h6'>{title}</StyledTitle>
      </StyledCardContent>
    </StyledLink>
  )
}

export default PortfolioCard
