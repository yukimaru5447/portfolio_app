import { FC } from 'react'
import { useController, Control } from 'react-hook-form'
import Box from '@mui/material/Box'

import InputText from '@/components/atoms/InputText'

import { styled } from '@mui/system'

const StyledTextField = styled(Box)(() => ({ width: '67%' }))

type Props = {
  name: string
  control: Control<any>
  defaultValue: string
  readOnly: boolean
  placeholder: string
}

const TextField: FC<Props> = ({
  name,
  control,
  defaultValue,
  readOnly,
  placeholder,
}) => {
  // TODO: エラーハンドリング
  const { field } = useController({
    name,
    control,
    defaultValue,
  })

  return (
    <StyledTextField>
      <InputText
        sx={{ fontSize: 28 }}
        readOnly={readOnly}
        placeholder={placeholder}
        {...field}
      />
    </StyledTextField>
  )
}

export default TextField
