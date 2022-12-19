import { FC, ReactNode } from 'react'
import NextLink from 'next/link'
import MuiLink from '@mui/material/Link'
import { SxProps, Theme } from '@mui/material'

type Props = {
  href: string
  children: ReactNode
  sx?: SxProps<Theme>
}

const Link: FC<Props> = ({ href, sx, children }) => {
  return (
    <MuiLink
      href={href}
      component={NextLink}
      sx={{
        textDecoration: 'none',
        ...sx,
      }}
    >
      {children}
    </MuiLink>
  )
}
export default Link
