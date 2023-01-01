import React, { FC } from 'react'
import { OutlinedInput as MuiOutlinedInput } from '@mui/material'
import { styled } from '@mui/system'

type Props = {
  id: string
  error: boolean
  readOnly: boolean
}

const StyledMuiOutlinedInput = styled(MuiOutlinedInput)(({ theme, error }) => ({
  width: '100%',
  padding: 0,
  borderRadius: theme.shape.borderRadius,
  '& .MuiOutlinedInput-notchedOutline': error
    ? null
    : {
        border: `1px solid ${theme.palette.border.color.default}`,
      },
  '& .MuiOutlinedInput-input:focus': {
    border: `1px solid ${theme.palette.border.color.focus}`,
    borderRadius: theme.shape.borderRadius,
  },
}))

const OutlinedInput: FC<Props> = React.forwardRef<HTMLInputElement, Props>(
  function OutlinedInput({ id, error, readOnly, ...rest }, ref) {
    return (
      <StyledMuiOutlinedInput
        id={id}
        error={error}
        ref={ref}
        readOnly={readOnly}
        {...rest}
      />
    )
  },
)
export default OutlinedInput
