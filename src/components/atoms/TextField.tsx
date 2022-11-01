import React, { FC } from 'react'

type Props = {
  value: string
  readOnly: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextField: FC<Props> = ({ value, readOnly, onChange }) => {
  return (
    <div className="w-2/3">
      <input
        type="text"
        className="w-full bg-slate-100 py-4 px-2 text-left text-3xl font-semibold focus:outline-none"
        placeholder="タイトル（32文字以内）"
        value={value}
        readOnly={readOnly}
        onChange={(e) => onChange(e)}
      />
    </div>
  )
}
