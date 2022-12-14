import { CSSProperties, FC } from 'react'
import { InputText } from '@/components/atoms'
import { useController, Control } from 'react-hook-form'
import Box from '@mui/material/Box'
import { styled } from '@mui/system'

type Props = {
  name: string
  control: Control<any>
  defaultValue: string
  label: string
  sx?: CSSProperties
  readOnly?: boolean
  placeholder?: string
}

const StyledLinkBar = styled(Box)(() => ({
  display: 'flex',
  width: '66%',
}))

const Label = styled(Box)(() => ({
  height: '3rem',
  width: '7rem',
  color: '#FFFFFF',
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  fontWeight: 600,
  borderTopLeftRadius: '0.5rem',
  borderBottomLeftRadius: '0.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

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
    <StyledLinkBar>
      <Label className='bg-indigo-300'>{label}</Label>

      <InputText
        sx={sx}
        readOnly={readOnly}
        placeholder={placeholder}
        {...field}
      />
    </StyledLinkBar>
  )
}
export default LinkBar
