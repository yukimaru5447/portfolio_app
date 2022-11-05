import { FC } from 'react'
import { useController, Control } from 'react-hook-form'
import Presentational from './TextField'

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
  const { field } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue,
  })

  return (
    <Presentational {...field} readOnly={readOnly} placeholder={placeholder} />
  )
}

export default TextField
