import { FC } from 'react'
import { Switch } from '@headlessui/react'
import { Control, useController } from 'react-hook-form'

type Props = {
  name: string
  label: string
  control: Control<any>
  defaultValue: boolean
}

const SwitchGroup: FC<Props> = ({ name, label, control, defaultValue }) => {
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
        <Switch
          checked={value}
          onChange={onChange}
          className={`${
            value ? 'bg-blue-400' : 'bg-gray-400'
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span
            className={`${
              value ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
        <Switch.Label>{label}</Switch.Label>
      </div>
    </Switch.Group>
  )
}

export default SwitchGroup
