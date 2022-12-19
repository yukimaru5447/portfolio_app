import React, { FC } from 'react'
import TextAreaInput from '@/components/atoms/TextAreaInput'
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
      <TextAreaInput readOnly={readOnly} placeholder={placeholder} {...field} />
    </div>
  )
}
export default TextArea
