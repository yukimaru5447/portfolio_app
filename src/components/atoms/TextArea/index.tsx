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
  // TODO: エラーハンドリング
  const { field } = useController({
    name,
    control,
    defaultValue,
  })
  return (
    <div className='w-2/3'>
      <Presentational
        {...field}
        readOnly={readOnly}
        placeholder={placeholder}
      />
    </div>
  )
}
export default TextArea
