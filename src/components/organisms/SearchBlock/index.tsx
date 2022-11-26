import { FC } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const SearchBlock: FC = () => {
  return (
    <div className='flex h-48 items-center justify-center'>
      <div className='relative flex w-2/3 items-end text-gray-600'>
        <input
          className='h-14 w-full rounded-full bg-white px-6 pl-10 pr-16 text-2xl shadow-md focus:shadow-md focus:outline-none focus:ring-1 focus:ring-slate-600/50 focus:ring-offset-4'
          type='search'
          name='search'
        />
        <button className='absolute right-0 top-0 mt-4 mr-8 h-6 w-6 fill-current text-slate-700 hover:text-slate-400'>
          <MagnifyingGlassIcon />
        </button>
      </div>
    </div>
  )
}

export default SearchBlock
