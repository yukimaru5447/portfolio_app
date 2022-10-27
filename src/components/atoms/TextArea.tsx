import React, { FC } from 'react'
import TextareaAutosize from 'react-textarea-autosize'

export const TextArea: FC = () => {
  return (
    <div className="w-2/3">
      <TextareaAutosize
        minRows={10}
        className="h-full w-full rounded-xl px-6 py-6 text-2xl font-medium focus:outline-none"
        placeholder="ポートフォリオの説明（マークダウン記法を使用できます）"
      />
    </div>
  )
}
