import React, { FC } from 'react'

type Props = {
  name: string
  value: string
  readOnly: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const LinkBar: FC<Props> = ({ name, value, readOnly, onChange }) => {
  return (
    <div className="flex w-2/3">
      <div className="text-ms flex h-12 w-28 items-center justify-center rounded-l-lg  bg-slate-300 text-center font-semibold text-white">
        {name}
      </div>
      <input
        type="text"
        className="h-12 w-full rounded-r-lg bg-white px-4 text-xl focus:outline-none"
        placeholder="https://"
        value={value}
        readOnly={readOnly}
        onChange={(e) => onChange(e)}
      />
    </div>
  )
}
