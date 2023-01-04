import { FC } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

import StyledAvatar from '@/components/atoms/Styled/StyledAvatar'
import Link from '@/components/atoms/Link'
import StyledIconButton from '@/components/atoms/Styled/StyledIconButton'

type Props = {
  userImage: string
}

const CircleAvatar: FC<Props> = ({ userImage }) => {
  return (
    <Link href='/profile'>
      {userImage ? (
        <StyledAvatar
          src={userImage}
          alt='ユーザーアバター'
          width={36}
          height={36}
        />
      ) : (
        <StyledIconButton>
          <AccountCircleIcon aria-label='search' fontSize='small' />
        </StyledIconButton>
      )}
    </Link>
  )
}

export default CircleAvatar
