import React, { FC } from 'react'
import TextareaAutosize from 'react-textarea-autosize'

type Props = {
  readOnly: boolean
  placeholder: string
}

export const TextArea: FC<Props> = React.forwardRef<HTMLTextAreaElement, Props>(
  function TextArea({ readOnly, placeholder, ...fields }, ref) {
    return (
      <TextareaAutosize
        minRows={10}
        className='h-full w-full rounded-xl px-6 py-6 text-2xl font-medium focus:outline-none'
        {...fields}
        ref={ref}
        readOnly={readOnly}
        placeholder={placeholder}
      />
    )
  },
)
export default TextArea
