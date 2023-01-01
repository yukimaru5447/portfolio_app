import React, { CSSProperties, FC } from 'react'
import Input from '@mui/material/Input'

type Props = {
  sx?: CSSProperties
  readOnly: boolean
  placeholder: string
}

export const TextAreaInput: FC<Props> = React.forwardRef<
  HTMLTextAreaElement,
  Props
>(function TextArea({ sx, readOnly, placeholder, ...fields }, ref) {
  return (
    <Input
      minRows={3}
      sx={sx}
      readOnly={readOnly}
      placeholder={placeholder}
      ref={ref}
      {...fields}
      multiline
      disableUnderline
    />
  )
})
export default TextAreaInput
