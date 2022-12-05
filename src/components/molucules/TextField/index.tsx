import { FC } from 'react'
import { useController, Control } from 'react-hook-form'
import { InputText } from '@/components/atoms'
import Box from '@mui/material/Box'

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
  // TODO: エラーハンドリング
  const { field } = useController({
    name,
    control,
    defaultValue,
  })

  return (
    <Box sx={{ width: '67%' }}>
      <InputText
        {...field}
        sx={{ fontSize: 28 }}
        readOnly={readOnly}
        placeholder={placeholder}
      />
    </Box>
  )
}

export default TextField
