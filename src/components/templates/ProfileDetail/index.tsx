import { FC } from 'react'
import { Tab } from '@headlessui/react'

import { ProfileCard } from '@/components/organisms'

import useHooks from './hooks'

const ProfileDetail: FC<{ userId: string }> = ({ userId }) => {
  const { profile, educations, experiences } = useHooks({ userId })

  return (
    <>
      <ProfileCard profile={profile} />
      <Tab.Group>
        <Tab.List>
          <Tab>学歴</Tab>
          <Tab>職歴</Tab>
          <Tab>資格</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            {educations &&
              educations.map(({ description, name, startedAt, endedAt }) => {
                return (
                  <>
                    学校名: {name} 説明: {description} 入学日:{' '}
                    {startedAt.toISOString()} 卒業日: {endedAt.toISOString()}{' '}
                    <br />
                  </>
                )
              })}
          </Tab.Panel>
          <Tab.Panel>
            {experiences &&
              experiences.map(({ description, name, startedAt, endedAt }) => {
                return (
                  <>
                    会社名: {name} 説明: {description} 入社日:{' '}
                    {startedAt.toISOString()} 退職日: {endedAt.toISOString()}{' '}
                    <br />
                  </>
                )
              })}
          </Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  )
}

export default ProfileDetail
