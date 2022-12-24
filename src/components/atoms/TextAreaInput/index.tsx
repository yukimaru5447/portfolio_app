import React, { FC } from 'react'
import TextareaAutosize from 'react-textarea-autosize'

type Props = {
  readOnly: boolean
  placeholder: string
}

export const TextAreaInput: FC<Props> = React.forwardRef<
  HTMLTextAreaElement,
  Props
>(function TextArea({ readOnly, placeholder, ...fields }, ref) {
  return (
    <TextareaAutosize
      minRows={10}
      style={{ width: '100%' }}
      ref={ref}
      readOnly={readOnly}
      placeholder={placeholder}
      {...fields}
    />
  )
})
export default TextAreaInput
