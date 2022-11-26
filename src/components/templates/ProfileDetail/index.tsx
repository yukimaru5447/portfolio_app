import { FC } from 'react'
import useHooks from './hooks'

const ProfileDetail: FC<{ userId: string }> = ({ userId }) => {
  const { profile } = useHooks({ userId })
  console.log(profile)

  return (
    <div className='overflow-hidden bg-white shadow sm:rounded-lg'>
      <div className='px-4 py-5 sm:px-6'>
        <h3 className='text-lg font-medium leading-6 text-gray-900'>
          Applicant Information
        </h3>
        <p className='mt-1 max-w-2xl text-sm text-gray-500'>
          Personal details and application.
        </p>
      </div>
    </div>
  )
}

export default ProfileDetail
