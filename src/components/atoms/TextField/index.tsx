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
    defaultValue,
  })

  return (
    <div className="w-2/3">
      <Presentational
        {...field}
        readOnly={readOnly}
        placeholder={placeholder}
      />
    </div>
  )
}

export default TextField
