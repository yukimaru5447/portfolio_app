import { FC } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

export const SearchBlock: FC = () => {
  return (
    <div className="flex h-48 items-center justify-center bg-slate-300">
      <div className="relative flex w-2/3 items-end text-gray-600">
        <input
          className="h-14 w-full rounded-full border-gray-300 bg-white px-6 pl-10 pr-16 text-2xl shadow-md focus:border-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-600 focus:ring-offset-4"
          type="search"
          name="search"
        />
        <button className="absolute right-0 top-0 mt-4 mr-8 h-6 w-6 fill-current text-slate-700 hover:text-slate-400">
          <MagnifyingGlassIcon />
        </button>
      </div>
    </div>
  )
}
