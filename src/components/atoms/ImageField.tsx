import React, { FC } from 'react'
import { PhotoIcon } from '@heroicons/react/24/outline'

export const ImageField: FC = () => {
  return (
    <>
      <div className="relative h-60 w-2/3 rounded-xl bg-slate-300">
        <input
          type="file"
          name="image"
          className="absolute h-full w-full opacity-0"
        />
        <PhotoIcon className="absolute top-1/2 right-1/2 h-6 w-6" />
      </div>
    </>
  )
}
