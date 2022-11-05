import React, { FC } from 'react'
import Presentational from './TextArea'
import { useController, Control } from 'react-hook-form'

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
  const { field } = useController({
    name,
    control,
    defaultValue,
  })
  return (
    <Presentational {...field} readOnly={readOnly} placeholder={placeholder} />
  )
}
export default TextArea
