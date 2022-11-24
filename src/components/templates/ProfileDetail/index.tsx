import { FC } from 'react'
import useHooks from './hooks'

const ProfileDetail: FC<{ userId: string }> = ({ userId }) => {
  const { profile } = useHooks({ userId })
  console.log(profile)

  return <div>ProfileDetail</div>
}

export default ProfileDetail
