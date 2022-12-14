import { FC } from 'react'
import { Control, useController } from 'react-hook-form'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'

type Props = {
  name: string
  label: string
  control: Control<any>
  defaultValue: boolean
  disabled: boolean
}

const SwitchGroup: FC<Props> = ({
  name,
  label,
  control,
  defaultValue,
  disabled,
}) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
    defaultValue,
  })

  return (
    <FormControlLabel
      checked={value}
      disabled={disabled}
      onChange={onChange}
      control={<Switch defaultChecked />}
      label={label}
    />
  )
}

export default SwitchGroup
