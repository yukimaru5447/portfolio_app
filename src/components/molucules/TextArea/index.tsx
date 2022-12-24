import React, { FC } from 'react'
import { useController, Control } from 'react-hook-form'
import Box from '@mui/material/Box'
import { styled } from '@mui/system'

import TextAreaInput from '@/components/atoms/TextAreaInput'

const StyledTextArea = styled(Box)(() => ({
  width: '66%',
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
    <StyledTextArea>
      <TextAreaInput readOnly={readOnly} placeholder={placeholder} {...field} />
    </StyledTextArea>
  )
}
export default TextArea
