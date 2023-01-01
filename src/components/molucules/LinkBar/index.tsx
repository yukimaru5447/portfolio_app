import { FC } from 'react'
import InputText from '@/components/atoms/InputText'
import { useController, Control } from 'react-hook-form'
import Box from '@mui/material/Box'
import { styled } from '@mui/system'
import Typography from '@mui/material/Typography'

type Props = {
  name: string
  control: Control<any>
  defaultValue: string
  label: string
  readOnly?: boolean
  placeholder?: string
}

const StyledLinkBar = styled(Box)(() => ({
  display: 'flex',
}))

const Label = styled(Typography)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  width: '7rem',
  color: '#FFFFFF',
  fontWeight: 700,
  borderTopLeftRadius: '0.5rem',
  borderBottomLeftRadius: '0.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.primary.main,
}))

const LinkBar: FC<Props> = ({
  name,
  defaultValue,
  control,
  label,
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
      <Label variant='inherit'>{label}</Label>

      <InputText
        sx={{
          width: '100%',
          backgroundColor: '#FFFFFF',
          borderTopRightRadius: 8,
          borderBottomRightRadius: 8,
          paddingLeft: 1,
          paddingRight: 1,
          fontSize: '1.25rem',
        }}
        readOnly={readOnly}
        placeholder={placeholder}
        {...field}
      />
    </StyledLinkBar>
  )
}
export default LinkBar
