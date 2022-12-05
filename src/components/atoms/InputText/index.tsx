import { Input } from '@mui/material'
import React, { CSSProperties } from 'react'
import { FC } from 'react'

type Props = {
  sx?: CSSProperties
  readOnly: boolean
  placeholder?: string
}

const InputText: FC<Props> = React.forwardRef<HTMLInputElement, Props>(
  function LinkBar({ sx, readOnly, placeholder, ...field }, ref) {
    return (
      <Input
        type='text'
        {...field}
        disableUnderline
        sx={sx}
        ref={ref}
        readOnly={readOnly}
        placeholder={placeholder}
      />
    )
  },
)
export default InputText
