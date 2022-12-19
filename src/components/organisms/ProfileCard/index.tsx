import Loading from '@/components/atoms/Loading'
import Image from 'next/image'
import { FC } from 'react'

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

const ProfileCard: FC<Props> = ({ profile }) => {
  if (!profile) return <Loading />

  const { firstName, lastName, firstNameKana, lastNameKana, description } =
    profile

  return (
    <div className='my-5 flex items-center justify-center'>
      <div className='w-96 rounded-md bg-white'>
        <div className='flex items-center px-4 py-5 sm:px-6'>
          <Image
            className='inline-block h-12 w-12 rounded-full ring-2 ring-white'
            src='https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
            alt='ユーザーアバター'
            width={100}
            height={100}
          />
          <div>
            <h6 className='leading-nomal text-xs text-gray-500'>
              {firstNameKana} {lastNameKana}
            </h6>
            <h3 className='text-lg font-medium leading-6 text-gray-900'>
              {firstName} {lastName}
            </h3>
            <p className='mt-1 max-w-2xl text-sm text-gray-500'>
              {description}
            </p>
          </div>
          <div>まるまる株式会社</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
