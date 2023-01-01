import React, { FC } from 'react'
import { useController, Control } from 'react-hook-form'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/system'

import TextAreaInput from '@/components/atoms/TextAreaInput'

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
}))

type Props = {
  name: string
  control: Control<any>
  defaultValue: string
  readOnly: boolean
  placeholder: string
}

export const TextArea: FC<Props> = ({
  name,
  defaultValue,
  control,
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
    <StyledPaper elevation={3}>
      <TextAreaInput
        sx={{ width: '100%' }}
        readOnly={readOnly}
        placeholder={placeholder}
        {...field}
      />
    </StyledPaper>
  )
}
export default TextArea
