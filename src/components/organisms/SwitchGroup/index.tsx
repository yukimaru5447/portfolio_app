import { FC } from 'react'
import { Switch } from '@headlessui/react'
import { Control, useController } from 'react-hook-form'

import { SwitchButton } from '@/components/atoms'

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
    <Switch.Group>
      <div className='flex items-center justify-center'>
        <SwitchButton value={value} onChange={onChange} disabled={disabled} />
        <Switch.Label className='pl-2'>{label}</Switch.Label>
      </div>
    </Switch.Group>
  )
}

export default SwitchGroup
