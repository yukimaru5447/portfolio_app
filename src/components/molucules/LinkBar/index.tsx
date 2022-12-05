import { CSSProperties, FC } from 'react'
import { InputText } from '@/components/atoms'
import { useController, Control } from 'react-hook-form'
import { Box } from '@mui/material'

type Props = {
  name: string
  control: Control<any>
  defaultValue: string
  label: string
  sx?: CSSProperties
  readOnly?: boolean
  placeholder?: string
}

const LinkBar: FC<Props> = ({
  name,
  defaultValue,
  control,
  label,
  sx,
  readOnly = false,
  placeholder = '',
}) => {
  // TODO: エラーハンドリング
  const { field } = useController({
    name,
    control,
    defaultValue,
  })
  return (
    <Box sx={{ display: 'flex', width: '66%' }}>
      <Box className='text-ms flex h-12 w-28 items-center justify-center rounded-l-lg  bg-indigo-300 text-center font-semibold text-white'>
        {label}
      </Box>

      <InputText
        {...field}
        sx={sx}
        readOnly={readOnly}
        placeholder={placeholder}
      />
    </Box>
  )
}
export default LinkBar
