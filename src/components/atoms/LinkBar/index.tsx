import { FC } from 'react'
import Presentational from './LinkBar'
import { useController, Control } from 'react-hook-form'

type Props = {
  name: string
  control: Control<any>
  defaultValue: string
  label: string
  readOnly: boolean
  placeholder: string
}

const LinkBar: FC<Props> = ({
  name,
  defaultValue,
  control,
  label,
  readOnly,
  placeholder,
}) => {
  const { field } = useController({
    name,
    control,
    defaultValue,
  })
  return (
    <Presentational
      {...field}
      label={label}
      readOnly={readOnly}
      placeholder={placeholder}
    />
  )
}
export default LinkBar
