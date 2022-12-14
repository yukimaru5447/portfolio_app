import Input from '@mui/material/Input'
import React, { CSSProperties } from 'react'
import { FC } from 'react'

type Props = {
  sx?: CSSProperties
  readOnly: boolean
  placeholder?: string
}

const InputText: FC<Props> = React.forwardRef<HTMLInputElement, Props>(
  function InputText({ sx, readOnly, placeholder, ...field }, ref) {
    return (
      <Input
        type='text'
        disableUnderline
        sx={sx}
        ref={ref}
        readOnly={readOnly}
        placeholder={placeholder}
        {...field}
      />
    )
  },
)
export default InputText
