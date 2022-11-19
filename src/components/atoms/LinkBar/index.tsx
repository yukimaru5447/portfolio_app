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
  // TODO: エラーハンドリング
  const { field } = useController({
    name,
    control,
    defaultValue,
  })
  return (
    <div className='flex w-2/3'>
      <div className='text-ms flex h-12 w-28 items-center justify-center rounded-l-lg  bg-indigo-300 text-center font-semibold text-white'>
        {label}
      </div>
      <Presentational
        {...field}
        readOnly={readOnly}
        placeholder={placeholder}
      />
    </div>
  )
}
export default LinkBar
