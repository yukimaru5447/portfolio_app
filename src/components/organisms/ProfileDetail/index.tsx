import { FC } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

import ProfileCard from '@/components/organisms/ProfileCard'

import useHooks from './hooks'

const ProfileDetail: FC<{ userId: string }> = ({ userId }) => {
  const { profile, educations, experiences, certifications } = useHooks({
    userId,
  })

  return (
    <>
      <ProfileCard profile={profile} />
      <Tabs>
        <Tab label='学歴' />
        <Tab label='職歴' />
        <Tab label='資格' />
      </Tabs>
      {educations &&
        educations.map(({ description, name, startedAt, endedAt }) => {
          return (
            <>
              学校名: {name} 説明: {description} 入学日:{' '}
              {startedAt.toISOString()} 卒業日: {endedAt.toISOString()} <br />
            </>
          )
        })}
      {experiences &&
        experiences.map(({ description, name, startedAt, endedAt }) => {
          return (
            <>
              会社名: {name} 説明: {description} 入社日:{' '}
              {startedAt.toISOString()} 退職日: {endedAt.toISOString()} <br />
            </>
          )
        })}
      {certifications &&
        certifications.map(({ name, startedAt }) => {
          return (
            <>
              資格名: {name} 取得日: {startedAt.toISOString()} <br />
            </>
          )
        })}
    </>
  )
}

export default ProfileDetail
