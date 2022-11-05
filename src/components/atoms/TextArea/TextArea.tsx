import React, { ComponentPropsWithoutRef, FC } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import type { TextareaAutosizeProps } from 'react-textarea-autosize'

type ChildProps = ComponentPropsWithoutRef<'textarea'> &
  TextareaAutosizeProps & {
    readOnly: boolean
    placeholder: string
  }

export const TextArea: FC<ChildProps> = React.forwardRef<
  HTMLTextAreaElement,
  ChildProps
>(function TextArea({ readOnly, placeholder, ...fields }, ref) {
  return (
    <div className="w-2/3">
      <TextareaAutosize
        minRows={10}
        className="h-full w-full rounded-xl px-6 py-6 text-2xl font-medium focus:outline-none"
        {...fields}
        ref={ref}
        readOnly={readOnly}
        placeholder={placeholder}
      />
    </div>
  )
})
export default TextArea
