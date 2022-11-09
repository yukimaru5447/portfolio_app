import { FC } from 'react'
import { Switch } from '@headlessui/react'
import clsx from 'clsx'
import React from 'react'

type Props = {
  value: boolean
  onChange: () => void
  disabled: boolean
}

const SwitchButton: FC<Props> = ({ value, onChange, disabled }) => {
  return (
    <Switch
      checked={value}
      onChange={onChange}
      disabled={disabled}
      className={clsx([
        value ? 'bg-blue-400' : 'bg-gray-400',
        disabled ? 'opacity-40' : '',
        'relative inline-flex h-6 w-11 items-center rounded-full',
      ])}
    >
      <span
        className={clsx([
          value ? 'translate-x-6' : 'translate-x-1',
          'inline-block h-4 w-4 transform rounded-full bg-white transition',
        ])}
      />
    </Switch>
  )
}

export default SwitchButton
