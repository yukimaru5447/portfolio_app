import React, { FC } from 'react'

type Props = {
  name: string
}

export const LinkBar: FC<Props> = (props) => {
  const { name } = props

  return (
    <div className="flex w-2/3">
      <div className="text-ms flex h-12 w-28 items-center justify-center rounded-l-lg  bg-slate-300 text-center font-semibold text-white">
        {name}
      </div>
      <input
        type="text"
        className="h-12 w-full rounded-r-lg bg-white px-4 text-xl focus:outline-none"
        placeholder="https://"
      />
    </div>
  )
}
