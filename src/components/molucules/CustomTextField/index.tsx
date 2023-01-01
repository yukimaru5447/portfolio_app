import { FC } from 'react'
import { useController, Control } from 'react-hook-form'
import InputLabel from '@mui/material/InputLabel'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import { styled } from '@mui/system'
import FormHelperText from '@mui/material/FormHelperText'
import ErrorIcon from '@mui/icons-material/Error'
import type { OutlinedInputProps } from '@mui/material/OutlinedInput'

import OutlinedInput from '@/components/atoms/OutlinedInput'

type Props = {
  name: string
  control: Control<any>
  defaultValue: string
  label?: string
  placeholder?: string
  variant?: string
  readOnly: boolean
  multiline?: boolean
  minRows?: number
  inputProps?: OutlinedInputProps
}

const StyledInputLabel = styled(InputLabel)(() => ({
  fontSize: 24,
  fontWeight: 700,
}))

const StyledOutlinedInputBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.common.white,
  marginTop: theme.spacing(3),
}))

const CustomTextField: FC<Props> = ({
  name,
  defaultValue,
  control,
  label,
  readOnly,
  ...rest
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue,
  })

  return (
    <FormControl variant='standard'>
      {label ? (
        <StyledInputLabel shrink htmlFor={name}>
          {label}
        </StyledInputLabel>
      ) : null}

      <StyledOutlinedInputBox>
        <OutlinedInput
          id={name}
          error={!!error}
          readOnly={readOnly}
          {...rest}
          {...field}
        />
      </StyledOutlinedInputBox>

      {error ? (
        <FormHelperText error id={name}>
          <ErrorIcon sx={{ verticalAlign: 'middle' }} />
          {error.message}
        </FormHelperText>
      ) : null}
    </FormControl>
  )
}
export default CustomTextField
