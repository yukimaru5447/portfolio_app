import clsx from 'clsx'
import { FC } from 'react'

type Props = {
  name: string
  type: 'submit' | 'button'
  disabled: boolean
}

const Button: FC<Props> = ({ name, type, disabled }) => {
  const defaultStyle =
    'mr-6 rounded-md px-4 py-2 text-sm font-medium text-white'

  // ボタンがdisabledでスタイルを変更
  const className = disabled
    ? clsx([defaultStyle, 'bg-slate-400'])
    : clsx([
        defaultStyle,
        'bg-slate-500 hover:bg-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white',
      ])

  return (
    <button type={type} className={className} disabled={disabled}>
      {name}
    </button>
  )
}
export default Button
