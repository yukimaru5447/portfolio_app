import React, { FC } from 'react'

export const TextField: FC = () => {
  return (
    <div className="w-2/3">
      <input
        type="text"
        className="w-full bg-slate-100 py-4 px-2 text-left text-3xl font-semibold focus:outline-none"
        placeholder="タイトル（32文字以内）"
      />
    </div>
  )
}
